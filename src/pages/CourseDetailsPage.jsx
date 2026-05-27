import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import neelamPortrait from '../assets/neelam_portrait.jpg';
import { BookOpen, Check, Shield, Award, MessageCircle, ArrowLeft, Calendar, Sparkles, AlertCircle, Heart, Star, Coins, Flame, Sun } from 'lucide-react';
import { WORKSHOPS_DATA } from '../data/workshops';

export default function CourseDetailsPage() {
  const { id } = useParams();

  // Find the matching workshop
  const workshop = WORKSHOPS_DATA.find((w) => w.id === id);

  // Dynamic styling helper for "Who Can Join" card based on course category
  const getWhoCanJoinStyle = (category) => {
    const baseStyle = {
      cardBg: 'bg-white border-2 border-purple-300 shadow-2xl',
      glowBg: 'bg-purple-100/40',
      titleColor: 'text-[#1C0320]',
      bulletColor: 'bg-[#6B1736]',
      itemBg: 'bg-purple-50/40 hover:bg-purple-50/70 border border-purple-200',
    };

    switch (category) {
      case 'Abundance & Wealth':
        return {
          ...baseStyle,
          iconColor: 'text-[#D4AF37]',
          iconName: 'Coins',
        };
      case 'Angels & Dragons':
        return {
          ...baseStyle,
          iconColor: 'text-[#7C3AED]',
          iconName: 'Flame',
        };
      case 'Yoga & Consciousness':
        return {
          ...baseStyle,
          iconColor: 'text-emerald-600',
          iconName: 'Sun',
        };
      case 'Spiritual Healing':
      default:
        return {
          ...baseStyle,
          iconColor: 'text-rose-500',
          iconName: 'Heart',
        };
    }
  };

  const cardStyle = workshop ? getWhoCanJoinStyle(workshop.category) : {};

  // Dynamic icon component resolver
  const renderCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Coins':
        return <Coins className={`w-4 h-4 ${cardStyle.iconColor} flex-shrink-0 animate-pulse`} />;
      case 'Flame':
        return <Flame className={`w-4 h-4 ${cardStyle.iconColor} flex-shrink-0 animate-pulse`} />;
      case 'Sun':
        return <Sun className={`w-4 h-4 ${cardStyle.iconColor} flex-shrink-0 animate-pulse`} />;
      case 'Heart':
      default:
        return <Heart className={`w-4 h-4 ${cardStyle.iconColor} flex-shrink-0 animate-pulse`} />;
    }
  };

  // Dynamic helper for unique "Sacred Frequency Seal" based on course category
  const getSacredSeal = (category) => {
    switch (category) {
      case 'Abundance & Wealth':
        return {
          title: 'Maha Laxmi & Kuber Blessing Seal',
          desc: 'This special session brings the blessings of Goddess Laxmi and Lord Kuber. It helps you clear your money worries, remove financial blocks, and attract wealth and success in life.',
          glowBg: 'bg-amber-100/40',
          svg: (
            <svg className="w-16 h-16 text-[#D4AF37] animate-[spin_50s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 50 50)" />
              <rect x="28" y="28" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="50,38 60,56 40,56" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="50,62 60,44 40,44" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
            </svg>
          )
        };
      case 'Angels & Dragons':
        return {
          title: 'Angel & Dragon Protection Seal',
          desc: 'This session connects you with powerful angels and helpful energy guides. It keeps you safe from negative energies, clears fear, and builds a strong positive shield around you.',
          glowBg: 'bg-purple-100/40',
          svg: (
            <svg className="w-16 h-16 text-[#7C3AED] animate-[spin_35s_linear_infinite]" viewBox="0 0 100 100">
              <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="50,22 74,36 74,64 50,78 26,64 26,36" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
              <polygon points="50,10 85,70 15,70" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="50,90 85,30 15,30" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="10" r="3" fill="currentColor" />
              <circle cx="85" cy="30" r="3" fill="currentColor" />
              <circle cx="85" cy="70" r="3" fill="currentColor" />
              <circle cx="50" cy="90" r="3" fill="currentColor" />
              <circle cx="15" cy="70" r="3" fill="currentColor" />
              <circle cx="15" cy="30" r="3" fill="currentColor" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
            </svg>
          )
        };
      case 'Yoga & Consciousness':
        return {
          title: 'Babaji Kriya Yoga Blessings',
          desc: 'This is a sacred energy session under the guidance of Mahavatar Babaji. It helps you improve focus, learn simple spiritual exercises, and keep your mind and body calm.',
          glowBg: 'bg-emerald-100/40',
          svg: (
            <svg className="w-16 h-16 text-[#059669] animate-[pulse_3s_ease-in-out_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
              <path d="M50,20 C55,35 65,35 50,50 C35,35 45,35 50,20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M50,80 C55,65 65,65 50,50 C35,65 45,65 50,80 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20,50 C35,55 35,65 50,50 C35,35 35,45 20,50 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M80,50 C65,55 65,65 50,50 C65,35 65,45 80,50 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
            </svg>
          )
        };
      case 'Spiritual Healing':
      default:
        return {
          title: 'Deep Healing & Peace Seal',
          desc: 'This session uses pure healing energy to remove old emotional pain, heal childhood worries, clear stressful thoughts, and bring deep peace and joy to your heart.',
          glowBg: 'bg-rose-100/40',
          svg: (
            <svg className="w-16 h-16 text-[#E11D48] animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="35" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="50" cy="65" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="35" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="65" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="39.5" cy="39.5" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
              <circle cx="60.5" cy="39.5" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
              <circle cx="39.5" cy="60.5" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
              <circle cx="60.5" cy="60.5" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
            </svg>
          )
        };
    }
  };

  const sealData = workshop ? getSacredSeal(workshop.category) : {};

  // Dynamic helper for unique bottom banner footer action card based on category
  const getBottomBanner = (category) => {
    switch (category) {
      case 'Abundance & Wealth':
        return {
          title: 'Ready to Attract Wealth & Prosperity?',
          desc: "Message us on WhatsApp to book your seat, get class timings, and learn how to attract wealth and success today.",
          glowBg: 'bg-amber-100/40',
        };
      case 'Angels & Dragons':
        return {
          title: 'Want to feel safe and positive?',
          desc: "Start your protective angel and dragon energy training. Message us on WhatsApp to secure your seat and class slot.",
          glowBg: 'bg-purple-100/40',
        };
      case 'Yoga & Consciousness':
        return {
          title: 'Ready to learn simple Kriya Yoga?',
          desc: "Take your next step to learn daily yoga exercises for mental peace. Connect with us on WhatsApp to book your class seat.",
          glowBg: 'bg-emerald-100/40',
        };
      case 'Spiritual Healing':
      default:
        return {
          title: 'Ready to clear stress and feel happy?',
          desc: "Start your personal healing or soul reading class. Connect with us on WhatsApp to check available dates and book your seat.",
          glowBg: 'bg-rose-100/40',
        };
    }
  };

  const bottomData = workshop ? getBottomBanner(workshop.category) : {};

  // Scroll to top on mount / change of id
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // States for FAQs
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const defaultFaqs = [
    {
      q: "What is a spiritual attunement or activation session?",
      a: "An attunement is a direct vibrational frequency alignment that cleanses the subtle energy bodies (aura, chakras, etheric pathways). Neelam channels high-vibrational guidance to clear deep-rooted karmic blocks and align you with your higher self's infinite potential."
    },
    {
      q: "Do I need any prior meditation or spiritual experience?",
      a: "No. All programs are open to seekers at any stage of their spiritual journey. Neelam guides you step-by-step through the meditation alignments, mantras, mudras, and energetic shielding exercises."
    },
    {
      q: "How long does the integration take?",
      a: "Spiritual frequencies usually settle into your energetic blueprint over a 21-day cycle. You may feel immediate lightheartedness, temporary emotional release, or enhanced clarity as the attunement integrates."
    },
    {
      q: "Are live recordings provided if I miss a workshop session?",
      a: "Yes, complete high-definition recordings of the attunement sessions are provided to all registered participants for lifetime practice, integration, and repeat activations."
    },
    {
      q: "How do I book a private 1-on-1 session?",
      a: "You can tap any of the WhatsApp registration buttons. Neelam's office will check current calendar slots and assign a personalized time suited to your timezone and energetic requirements."
    }
  ];

  const faqItems = (workshop && workshop.faqs) ? workshop.faqs : defaultFaqs;

  if (!workshop) {
    return (
      <div className="pt-32 min-h-screen bg-[#E2D5F3] flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-white border border-purple-200 rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-20%] w-48 h-48 rounded-full bg-purple-100/50 blur-2xl pointer-events-none" />
          <BookOpen className="w-16 h-16 text-[#6B1736] mx-auto mb-4 animate-bounce" />
          <h2 className="font-serif text-2xl font-black text-[#1C0320] mb-2">
            Offering Not Found
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            We couldn't find the program you are looking for. It may have been renamed or rescheduled.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-[#3E0844] hover:bg-[#1C0320] text-white font-bold py-3.5 px-6 rounded-xl transition-all text-xs uppercase tracking-wider shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  // Get suggestions of the same general type (group program vs 1-to-1 session)
  const isOneOnOne = workshop.type === '1-to-1 Session';

  const related = WORKSHOPS_DATA.filter((w) => {
    const typeMatch = isOneOnOne ? w.type === '1-to-1 Session' : w.type !== '1-to-1 Session';
    return typeMatch && w.category === workshop.category && w.id !== workshop.id;
  });

  let suggestions = [...related];
  if (suggestions.length < 3) {
    const remaining = WORKSHOPS_DATA.filter((w) => {
      const typeMatch = isOneOnOne ? w.type === '1-to-1 Session' : w.type !== '1-to-1 Session';
      return typeMatch && w.id !== workshop.id && !suggestions.some(s => s.id === w.id);
    });
    suggestions = [...suggestions, ...remaining].slice(0, 3);
  } else {
    suggestions = suggestions.slice(0, 3);
  }

  // Dynamic suggestions section heading
  let suggestionsHeading = "More Workshops For You";
  if (workshop.type === 'Course') {
    suggestionsHeading = "More Courses For You";
  } else if (workshop.type === '1-to-1 Session') {
    suggestionsHeading = "More 1-to-1 Sessions For You";
  }

  // Helper to parse double newlines or newlines into structural roadmap blocks
  const parseDetailsToBlocks = (detailsText) => {
    if (!detailsText) return [];
    // Split by newlines and clean empty lines
    const rawLines = detailsText.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    return rawLines.map((line) => {
      // Find splits like ":" or "—" or "–" to identify headings
      const splitChar = line.includes(':') ? ':' : (line.includes('—') ? '—' : (line.includes('–') ? '–' : ''));
      if (splitChar) {
        const index = line.indexOf(splitChar);
        return {
          title: line.substring(0, index).trim(),
          desc: line.substring(index + 1).trim()
        };
      }
      return {
        title: '',
        desc: line
      };
    });
  };

  const curriculumBlocks = parseDetailsToBlocks(workshop.details);

  return (
    <div className="pt-24 min-h-screen bg-[#E2D5F3] text-gray-900 pb-24">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[40%] rounded-full bg-white/30 blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-[#3E0844] hover:text-[#1C0320] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors bg-white/60 border border-purple-200/50 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
        </div>

        {/* Row 1: Full-Width Glassmorphic Hero Header */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-purple-100 shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute top-[-20%] right-[-10%] w-80 h-80 rounded-full bg-purple-100/40 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 rounded-full bg-white/40 blur-2xl pointer-events-none" />

          <div className="relative z-10 border-b border-purple-100 pb-6 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#6B1736] bg-[#6B1736]/5 border border-[#6B1736]/15 px-3 py-1 rounded-full">
                {workshop.category}
              </span>
            </div>
            <p className="text-[#6B1736] text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1.5 animate-pulse">
              {workshop.subtitle}
            </p>
            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#1C0320] leading-tight drop-shadow-sm">
              {workshop.title}
            </h1>
          </div>

          <div className="relative z-10 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-gray-800 text-base sm:text-lg">
              {workshop.description}
            </p>
          </div>
        </div>

        {/* Row 2: Split Columns for Core Details (Left 5-cols, Right 7-cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">

          {/* LEFT SIDE: Sidebar image & action elements (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-6 border border-purple-100 shadow-2xl relative overflow-hidden group">
              {/* Image Box */}
              <div className="relative h-64 sm:h-80 w-full rounded-[1.75rem] overflow-hidden mb-6 bg-purple-950 shadow-inner border-2 border-purple-300/80">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider bg-[#3E0844]/90 text-[#F5D28E] border border-[#F5D28E]/25 px-4 py-2 rounded-full backdrop-blur-md">
                  {workshop.category}
                </span>
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-purple-50/60 p-4 rounded-2xl border-2 border-purple-300/80 flex flex-col justify-between hover:bg-purple-50/80 hover:scale-[1.02] transition-all duration-300">
                  <Calendar className="w-5 h-5 text-[#6B1736] mb-2" />
                  <div>
                    <span className="block text-[9px] font-black text-[#6B1736] uppercase tracking-wider">Format</span>
                    <span className="font-bold text-xs sm:text-sm text-[#1C0320]">{workshop.duration}</span>
                  </div>
                </div>

                <div className="bg-purple-50/60 p-4 rounded-2xl border-2 border-purple-300/80 flex flex-col justify-between hover:bg-purple-50/80 hover:scale-[1.02] transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-[#6B1736] mb-2" />
                  <div>
                    <span className="block text-[9px] font-black text-[#6B1736] uppercase tracking-wider">Classification</span>
                    <span className="font-bold text-xs sm:text-sm text-[#1C0320]">{workshop.type}</span>
                  </div>
                </div>
              </div>

              {/* Registration and Whatsapp Actions */}
              <div className="bg-purple-50/30 border-2 border-purple-300/80 p-5 rounded-2xl space-y-4 shadow-sm">
                <a
                  href={`https://wa.me/919829156812?text=Hello%20Neelam%20Arora%20Team,%20I%20am%20very%20interested%20in%20registering%20for%20the%20${encodeURIComponent(workshop.title)}.%20Please%20guide%20me%20on%20the%20registration%20details!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA56] hover:brightness-105 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current animate-bounce" />
                  Register via WhatsApp
                </a>
                <p className="text-[10px] text-gray-500 text-center font-medium leading-relaxed">
                  Deep activations involve precise cosmic timings. Tap above to connect with Neelam's office on WhatsApp for slot allocations, pricing structures, and joining links.
                </p>
              </div>
            </div>

            {/* Who Can Join Details Card in Sidebar for Spacing Balance */}
            {workshop.whoCanJoin && workshop.whoCanJoin.length > 0 && (
              <div className={`rounded-[2.5rem] p-6 border shadow-2xl relative overflow-hidden text-left transition-all duration-300 hover:scale-[1.01] ${cardStyle.cardBg}`}>
                <div className={`absolute top-[-20%] left-[-20%] w-32 h-32 rounded-full blur-2xl pointer-events-none ${cardStyle.glowBg}`} />
                <h3 className={`font-serif text-sm font-black flex items-center gap-2 mb-3 border-b border-purple-100/25 pb-2 ${cardStyle.titleColor}`}>
                  {renderCategoryIcon(cardStyle.iconName)}
                  Who Can Join?
                </h3>
                <div className="space-y-2">
                  {workshop.whoCanJoin.map((who, idx) => (
                    <div key={idx} className={`flex gap-2.5 text-[11px] leading-relaxed font-semibold p-3 rounded-xl border transition-all duration-200 ${cardStyle.titleColor} ${cardStyle.itemBg}`}>
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${cardStyle.bulletColor}`} />
                      <span>{who}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Unique Portal Element: Mandalic Sacred Geometry SVG Seal */}
            <div className="bg-white rounded-[2.5rem] p-6 border-2 border-purple-300/80 shadow-2xl relative overflow-hidden text-center transition-all duration-300 hover:scale-[1.01]">
              <div className={`absolute top-[-20%] left-[-20%] w-32 h-32 rounded-full blur-2xl pointer-events-none ${sealData.glowBg}`} />
              <div className="mx-auto w-24 h-24 mb-4 relative flex items-center justify-center bg-purple-50 rounded-full border border-[#E2D5F3]">
                {sealData.svg}
                <Star className="w-4 h-4 text-[#F5D28E] absolute animate-pulse" />
              </div>
              <h4 className="font-serif font-black text-[#1C0320] text-sm uppercase tracking-widest mb-1.5">
                {sealData.title}
              </h4>
              <p className="text-[11px] text-gray-600 leading-relaxed max-w-xs mx-auto font-semibold">
                {sealData.desc}
              </p>
            </div>


          </div>

          {/* RIGHT SIDE: Core Curriculum, Benefits & Who Can Join (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-purple-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-[-5%] right-[-5%] w-64 h-64 rounded-full bg-purple-100/30 blur-3xl pointer-events-none" />

              {/* Sacred Roadmap / Curriculum Timeline */}
              {curriculumBlocks.length > 0 && (
                <div className="space-y-6 mb-8">
                  <h3 className="font-serif text-xl font-bold text-[#1C0320] flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-[#6B1736]" />
                    Program Roadmap & Curriculum
                  </h3>

                  <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-300/80 ml-2 space-y-6">
                    {curriculumBlocks.map((block, idx) => (
                      <div key={idx} className="relative group/timeline">
                        {/* Timeline Node dot */}
                        <span className="absolute left-[-33px] sm:left-[-41px] top-1.5 w-5 h-5 rounded-full bg-[#3E0844] border-4 border-white shadow-md group-hover/timeline:scale-110 transition-transform duration-300 flex items-center justify-center z-10" />

                        <div className="bg-purple-50/40 border-2 border-purple-300/80 p-5 rounded-2xl group-hover/timeline:border-[#3E0844]/40 group-hover/timeline:bg-purple-50/70 transition-all duration-300">
                          {block.title ? (
                            <>
                              <h4 className="font-serif font-black text-sm sm:text-base text-[#1C0320] mb-1.5">
                                {block.title}
                              </h4>
                              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                                {block.desc}
                              </p>
                            </>
                          ) : (
                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                              {block.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Benefits Grid */}
              {workshop.benefits && workshop.benefits.length > 0 && (
                <div className="space-y-4 border-t border-purple-100 pt-8 mb-8">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C0320] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#6B1736] flex-shrink-0" />
                    Key Benefits of This Attunement
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {workshop.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed font-semibold bg-purple-50/40 border-2 border-purple-300/80 p-4 rounded-2xl hover:bg-purple-50/70 hover:scale-[1.01] transition-all duration-300">
                        <Check className="w-4 h-4 text-[#3E0844] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Row 3: Full-Width Meet Your Facilitator Banner (Spans 12 columns) */}
        <div className="bg-white/85 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-purple-200/60 mb-8">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E2D5F3]/50 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-purple-50 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-center md:items-start relative z-10">
            {/* Left side: Beautiful large styled portrait photo of Neelam */}
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-[#E2D5F3] p-1.5 flex-shrink-0 shadow-2xl border-2 border-purple-300/80 relative group overflow-hidden">
              <img
                src={neelamPortrait}
                alt="Neelam Arora"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 border border-[#F5D28E]/20 rounded-2xl pointer-events-none" />
            </div>

            {/* Right side: Detailed spiritual Facilitator Bio directly matching user image content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <p className="text-[#6B1736] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1 animate-pulse">
                  Spiritual Master | Divine Channel | Founder of Meditation Magic
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C0320] leading-tight">
                  About- Neelam Arora
                </h3>
              </div>

              <div className="space-y-3.5 text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                <p className="text-[#3E0844] font-semibold text-sm sm:text-base border-l-4 border-[#6B1736]/40 pl-3">
                  Neelam Arora is not just a healer—she is a direct channel of divine intelligence, working beyond traditional spirituality to create real, measurable transformation in people's lives.
                </p>
                <p className="text-[#1C0320]/80">
                  With a rare natural ability to access higher realms, Neelam connects effortlessly with Angels, Unicorns, Dragons, and divine consciousness, bringing through high-frequency energies that activate healing at the soul, timeline, and reality level.
                </p>
                <p className="text-[#6B1736] font-semibold">
                  Her work is deeply experiential—clients don't just learn spirituality, they experience energetic shifts, breakthroughs, and life changes in real time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Collapsible FAQs Accordion (Full Width) */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border-2 border-purple-300/80 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full bg-purple-50 blur-3xl pointer-events-none" />

          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C0320] flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-[#6B1736] flex-shrink-0 animate-pulse" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-purple-50/40 border-2 border-purple-300/80 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-purple-50/60"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 focus:outline-none hover:bg-purple-50/50 transition-colors"
                  >
                    <span className="font-serif font-bold text-xs sm:text-sm text-[#1C0320]">
                      {item.q}
                    </span>
                    <span className={`text-[#6B1736] transition-transform duration-300 font-black text-xs ${isOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[14rem] border-t-2 border-purple-200/80 p-5 bg-white/40' : 'max-h-0'
                      }`}
                  >
                    <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed font-medium">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 5: Balanced Bottom Footer Actions */}
        <div className="bg-white rounded-[2.5rem] p-6 border-2 border-purple-300/80 shadow-2xl relative overflow-hidden mb-16 max-w-2xl mx-auto text-center transition-all duration-300 hover:scale-[1.01]">
          <div className={`absolute top-[-30%] left-[-30%] w-32 h-32 rounded-full blur-2xl pointer-events-none ${bottomData.glowBg}`} />
          <h4 className="font-serif font-bold text-[#1C0320] text-sm sm:text-base mb-2">
            {bottomData.title}
          </h4>
          <p className="text-gray-600 text-xs mb-5 font-semibold leading-relaxed">
            {bottomData.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href={`https://wa.me/919829156812?text=Hello%20Neelam%20Arora%20Team,%20I%20am%20very%20interested%20in%20registering%20for%20the%20${encodeURIComponent(workshop.title)}.%20Please%20guide%20me%20on%20the%20registration%20details!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64 bg-[#3E0844] hover:bg-[#1C0320] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Connect for Booking
            </a>
            <Link
              to="/courses"
              className="w-full sm:w-auto border border-purple-200 hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-2xl text-center text-xs sm:text-sm uppercase tracking-wider transition-all"
            >
              Return to Catalog
            </Link>
          </div>
        </div>

        {/* Row 6: Suggestion Section (More Like This) */}
        <div className="border-t border-purple-200/60 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C0320] leading-tight mb-2">
                {suggestionsHeading}
              </h2>
              <p className="text-gray-700 text-xs sm:text-sm font-medium">
                Expand your spiritual practice and align with higher vibrational consciousness.
              </p>
            </div>
            <Link
              to="/courses"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B1736] hover:text-[#3E0844] transition-colors"
            >
              Explore All <Sparkles className="w-4 h-4 text-[#6B1736] animate-pulse" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggestions.map((s) => (
              <Link
                key={s.id}
                to={`/courses/${s.id}`}
                className="bg-white rounded-[2rem] border border-purple-100 p-5 flex flex-col justify-between hover:border-[#3E0844]/30 hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1 text-left cursor-pointer animate-fade-in animate-duration-500"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-purple-950">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider bg-[#3E0844]/80 text-[#F5D28E] border border-[#F5D28E]/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                      {s.category}
                    </span>
                  </div>

                  {/* Body */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C0320] group-hover:text-[#3E0844] transition-colors leading-snug mb-1">
                    {s.title}
                  </h3>
                  <h4 className="text-[10px] font-bold text-[#6B1736] uppercase tracking-widest mb-3">
                    {s.subtitle}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {s.description}
                  </p>
                </div>

                {/* View syllabus Link CTA */}
                <div
                  className="w-full border border-purple-200 group-hover:border-[#3E0844] group-hover:bg-[#3E0844]/5 text-[#3E0844] font-bold py-3.5 rounded-xl text-center text-xs uppercase tracking-wider transition-all duration-300 block"
                >
                  View Details & Syllabus
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
