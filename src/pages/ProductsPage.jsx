import React, { useState } from 'react';
import Products from '../components/Products';
import { Gem, Sparkles, Copy, Check, Moon, Flame, Headphones } from 'lucide-react';

export default function ProductsPage() {
  // Calculator States
  const [auraName, setAuraName] = useState('');
  const [auraZodiac, setAuraZodiac] = useState('Aries');
  const [auraIntention, setAuraIntention] = useState('Wealth & Abundance');
  const [selectedCrystalId, setSelectedCrystalId] = useState('1');
  const [isAuraCalculating, setIsAuraCalculating] = useState(false);
  const [auraProgress, setAuraProgress] = useState(0);
  const [auraStageText, setAuraStageText] = useState('');
  const [auraResult, setAuraResult] = useState(null);
  const [isAffirmationCopied, setIsAffirmationCopied] = useState(false);
  const [activeCleanseTab, setActiveCleanseTab] = useState('camphor');

  const crystalChoices = [
    {
      id: '1',
      name: 'Multi Fluorite Crystal Bracelet',
      price: '₹1,111',
      intention: 'Focus, clear thoughts, and calm mind',
      affirmation: 'My mind is completely clear, calm, and focused on my happy goals.'
    },
    {
      id: '2',
      name: 'Tiger Eye Bracelet',
      price: '₹899',
      intention: 'Courage, strength, and good luck',
      affirmation: 'I am brave, strong, and highly successful in everything I do.'
    },
    {
      id: '3',
      name: 'Amethyst Healing Bracelet',
      price: '₹1,299',
      intention: 'Peace, sleep, and inner wisdom',
      affirmation: 'I am filled with calm, deep peace, and pure positive vibes.'
    },
    {
      id: '4',
      name: 'Rose Quartz Love Bracelet',
      price: '₹999',
      intention: 'Love, healthy relations, and self-care',
      affirmation: 'I give and receive pure, beautiful, and happy love every single day.'
    },
    {
      id: '5',
      name: 'Black Tourmaline Bracelet',
      price: '₹1,199',
      intention: 'EMF protection and repelling bad vibes',
      affirmation: 'I am safe and fully protected from all kinds of negative vibes.'
    },
    {
      id: '6',
      name: 'Lapis Lazuli Bracelet',
      price: '₹1,499',
      intention: 'Confidence, communication, and clear speaking',
      affirmation: 'I speak my thoughts with confidence, pride, and clear inner wisdom.'
    }
  ];

  const handleAuraCalculate = (e) => {
    e.preventDefault();
    if (!auraName.trim()) return;

    setIsAuraCalculating(true);
    setAuraProgress(0);
    setAuraResult(null);

    const stages = [
      { progress: 25, text: "Reading your zodiac sign and vibe match..." },
      { progress: 60, text: "Matching crystal power with your name..." },
      { progress: 100, text: "Perfect match calculation complete!" }
    ];

    stages.forEach((stage, idx) => {
      setTimeout(() => {
        setAuraProgress(stage.progress);
        setAuraStageText(stage.text);
        if (stage.progress === 100) {
          setTimeout(() => {
            setIsAuraCalculating(false);
            const nameVal = auraName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const zodiacVal = auraZodiac.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const intentionVal = auraIntention.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const crystalVal = parseInt(selectedCrystalId) * 17;
            const hash = (nameVal + zodiacVal + intentionVal + crystalVal) % 100;
            const deterministicScore = 88 + (hash % 11) + (hash % 10) / 10 + Math.random() * 0.9;
            const finalScore = Math.min(99.9, deterministicScore).toFixed(1);
            
            const selectedChoice = crystalChoices.find(c => c.id === selectedCrystalId);
            
            let simpleMessage = "";
            if (selectedChoice.id === '1') {
              simpleMessage = `Dear ${auraName}, this Multi Fluorite Crystal is a great match for your ${auraZodiac} sign with a ${finalScore}% vibe score! It will help clear your thinking, make decision-making simple, and support your ${auraIntention} dreams.`;
            } else if (selectedChoice.id === '2') {
              simpleMessage = `Dear ${auraName}, this Tiger Eye Bracelet matches your ${auraZodiac} sign perfectly with a ${finalScore}% vibe score! It shields you from bad waves, boosts your confidence, and brings good luck for your ${auraIntention} goals.`;
            } else if (selectedChoice.id === '3') {
              simpleMessage = `Dear ${auraName}, this Amethyst Bracelet matches your ${auraZodiac} sign wonderfully at ${finalScore}%! It easily calms down mental stress, helps you get deep sleep, and brings quiet peace so you can reach your ${auraIntention}.`;
            } else if (selectedChoice.id === '4') {
              simpleMessage = `Dear ${auraName}, this Rose Quartz Bracelet connects with your heart energy at a beautiful ${finalScore}% match! It brings self-care, helps attract positive friends or life partners, and fills your home with happy vibes.`;
            } else if (selectedChoice.id === '5') {
              simpleMessage = `Dear ${auraName}, this Black Tourmaline Bracelet matches your ${auraZodiac} sign at a powerful ${finalScore}% score! It acts like a wall to keep away negative people and computer radiation, keeping you completely safe.`;
            } else {
              simpleMessage = `Dear ${auraName}, this Lapis Lazuli Bracelet matches your ${auraZodiac} sign at a super ${finalScore}% score! It gives you the confidence to speak clearly, makes your mind sharp, and helps you manifest your ${auraIntention}.`;
            }

            setAuraResult({
              score: finalScore,
              crystalName: selectedChoice.name,
              message: simpleMessage,
              affirmation: selectedChoice.affirmation,
              price: selectedChoice.price
            });
          }, 600);
        }
      }, (idx + 1) * 800);
    });
  };

  const handleCopyAffirmation = (text) => {
    navigator.clipboard.writeText(text);
    setIsAffirmationCopied(true);
    setTimeout(() => {
      setIsAffirmationCopied(false);
    }, 2000);
  };

  return (
    <div className="pt-16 lg:pt-24 min-h-screen bg-[#E2D5F3]">
      {/* Page Header */}
      <div className="relative pt-4 pb-3 sm:pb-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3">
            <Gem className="w-4 h-4 text-[#6B1736]" />
            Energized Crystal Products
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C0320] leading-tight mb-3">
            Energized Crystal Products
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Every crystal is handpicked, carefully cleansed with high-frequency sound bowls, and charged with 5D manifestation coding by Neelam Arora to attract divine abundance into your life.
          </p>
        </div>
      </div>

      {/* Render Products Grid Component */}
      <Products />

      {/* 🔮 Interactive Crystal Match Calculator */}
      <div className="mt-6 sm:mt-12 bg-gradient-to-br from-[#3E0844] via-[#2F0A59] to-[#1C0320] text-white rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-10 lg:p-12 border-2 border-[#FFD95A]/30 relative overflow-hidden shadow-2xl max-w-[95%] mx-auto mb-16">
        
        {/* Subtle sparkles & cosmic background elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-[#FFD95A]/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#FFD95A] bg-white/5 border border-white/10 px-4 py-2 rounded-full uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#FFD95A]" />
              Interactive Vibe Tester
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3">
              Find Your Perfect Crystal Match
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#FFD95A] to-amber-500 mx-auto rounded-full mt-3 mb-2" />
            <p className="text-white/70 text-xs sm:text-sm font-semibold max-w-2xl mx-auto leading-relaxed">
              Different crystals match different signs and intentions. Enter your name and zodiac sign below to calculate your vibe match with our blessed gemstone bracelets!
            </p>
          </div>

          {/* Interactive Widget Block */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 shadow-inner">
            
            {!isAuraCalculating && !auraResult && (
              /* Stage 1: The Input Form */
              <form onSubmit={handleAuraCalculate} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[10px] font-black text-[#FFD95A] uppercase tracking-widest mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={auraName}
                      onChange={(e) => setAuraName(e.target.value)}
                      placeholder="e.g. Shanti Sanap"
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs font-bold text-white placeholder-white/30 focus:outline-none focus:border-[#FFD95A] focus:ring-1 focus:ring-[#FFD95A]/30 transition-all shadow-md"
                    />
                  </div>

                  {/* Choose Crystal Dropdown */}
                  <div>
                    <label className="block text-[10px] font-black text-[#FFD95A] uppercase tracking-widest mb-2">Select Crystal</label>
                    <select
                      value={selectedCrystalId}
                      onChange={(e) => setSelectedCrystalId(e.target.value)}
                      className="w-full bg-[#1E003B] border border-white/15 rounded-xl px-4 py-3 text-xs font-bold text-white focus:outline-none focus:border-[#FFD95A] focus:ring-1 focus:ring-[#FFD95A]/30 transition-all shadow-md cursor-pointer"
                    >
                      {crystalChoices.map((choice) => (
                        <option key={choice.id} value={choice.id} className="bg-[#1E003B] text-white font-semibold">{choice.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Zodiac Selector */}
                  <div>
                    <label className="block text-[10px] font-black text-[#FFD95A] uppercase tracking-widest mb-2">Your Zodiac Sign</label>
                    <select
                      value={auraZodiac}
                      onChange={(e) => setAuraZodiac(e.target.value)}
                      className="w-full bg-[#1E003B] border border-white/15 rounded-xl px-4 py-3 text-xs font-bold text-white focus:outline-none focus:border-[#FFD95A] focus:ring-1 focus:ring-[#FFD95A]/30 transition-all shadow-md cursor-pointer"
                    >
                      {['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'].map((z) => (
                        <option key={z} value={z} className="bg-[#1E003B] text-white font-semibold">{z}</option>
                      ))}
                    </select>
                  </div>

                  {/* Primary Intention */}
                  <div>
                    <label className="block text-[10px] font-black text-[#FFD95A] uppercase tracking-widest mb-2">Main Goal / Dream</label>
                    <select
                      value={auraIntention}
                      onChange={(e) => setAuraIntention(e.target.value)}
                      className="w-full bg-[#1E003B] border border-white/15 rounded-xl px-4 py-3 text-xs font-bold text-white focus:outline-none focus:border-[#FFD95A] focus:ring-1 focus:ring-[#FFD95A]/30 transition-all shadow-md cursor-pointer"
                    >
                      {['Wealth & Abundance', 'Deep Mental Peace', 'Safety & Protection', 'Love & Harmony', 'Spiritual Wisdom', 'Stress Relief'].map((item) => (
                        <option key={item} value={item} className="bg-[#1E003B] text-white font-semibold">{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#FFD95A] to-amber-500 hover:from-amber-400 hover:to-[#FFD95A] text-[#0D0015] font-black py-4 px-10 rounded-xl text-xs uppercase tracking-widest shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    Calculate Vibe Match
                  </button>
                </div>
              </form>
            )}

            {isAuraCalculating && (
              /* Stage 2: The Attunement Animation */
              <div className="flex flex-col items-center justify-center py-8 text-center space-y-6">
                {/* Glowing frequency wheel */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-white/10 border-t-[#FFD95A] animate-spin" style={{ animationDuration: '1.2s' }} />
                  <div className="absolute w-16 h-16 rounded-full border border-dashed border-purple-400 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
                  <Sparkles className="w-6 h-6 text-[#FFD95A] animate-pulse" />
                </div>

                <div className="space-y-2 max-w-md">
                  <span className="block text-[#FFD95A] text-xs font-black uppercase tracking-widest animate-pulse">
                    Matching vibes... {auraProgress}%
                  </span>
                  <p className="text-xs font-bold text-white/80 leading-relaxed min-h-[32px] transition-all">
                    {auraStageText}
                  </p>
                </div>

                <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FFD95A] to-amber-500 rounded-full transition-all duration-300"
                    style={{ width: `${auraProgress}%` }}
                  />
                </div>
              </div>
            )}

            {!isAuraCalculating && auraResult && (
              /* Stage 3: The Sacred Alignment Result */
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-4">
                {/* Left Circle: Compatibility Score Ring */}
                <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                  <div className="relative w-36 h-36 rounded-full bg-[#1E003B] border-4 border-[#FFD95A]/30 flex flex-col items-center justify-center shadow-2xl mx-auto">
                    <div className="absolute inset-2 rounded-full border border-dashed border-[#FFD95A]/45 animate-spin pointer-events-none" style={{ animationDuration: '20s' }} />
                    <span className="text-[10px] font-black text-[#FFD95A] uppercase tracking-widest">Vibe Match</span>
                    <span className="text-3xl font-black text-white mt-1">{auraResult.score}%</span>
                    <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest mt-1">Excellent Match</span>
                  </div>
                </div>

                {/* Right Content: Message & Custom Affirmation */}
                <div className="md:col-span-8 space-y-5 text-left">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                      Match Confirmed!
                    </span>
                    <p className="text-white/90 text-xs sm:text-sm font-semibold leading-relaxed">
                      {auraResult.message}
                    </p>
                  </div>

                  {/* Interactive Affirmation Widget */}
                  <div className="bg-[#1E003B]/60 border border-white/10 rounded-2xl p-5 relative overflow-hidden group">
                    <div className="relative sm:absolute flex justify-end mb-3 sm:mb-0 sm:top-3 sm:right-3">
                      <button
                        onClick={() => handleCopyAffirmation(auraResult.affirmation)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white hover:text-[#FFD95A] transition-all active:scale-90 cursor-pointer flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"
                        title="Copy Affirmation"
                      >
                        {isAffirmationCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <span className="block text-[9px] font-black text-[#FFD95A] uppercase tracking-widest mb-2 flex items-center gap-1">
                      <Moon className="w-3 h-3 text-[#FFD95A]" /> Your Positive Daily Mantra:
                    </span>
                    <p className="text-white text-xs font-black leading-relaxed sm:pr-16 italic">
                      "{auraResult.affirmation}"
                    </p>
                    <span className="block text-[8px] font-bold text-white/35 mt-2.5 uppercase tracking-wide">
                      *Hold your crystal in your hands and say this mantra 11 times every morning.
                    </span>
                  </div>

                  {/* Call to Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <a
                      href={`https://wa.me/919829156812?text=${encodeURIComponent("Hello! I calculated my vibe match for the " + auraResult.crystalName + " and got a wonderful " + auraResult.score + "% score! I want to buy this blessed crystal bracelet.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-white font-black text-xs px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                    >
                      Claim My Blessed Crystal on WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setAuraResult(null);
                        setAuraName('');
                      }}
                      className="text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      Try Another Crystal
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* 🧼 Interactive 5D Crystal Care & Cleansing Guide */}
      <div className="mt-8 bg-white rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-10 lg:p-12 border-2 border-[#3E0844]/50 shadow-2xl max-w-[95%] mx-auto mb-16 relative overflow-hidden">
        
        {/* Soft decorative background blurs */}
        <div className="absolute top-[-20%] left-[-20%] w-72 h-72 rounded-full bg-purple-100/50 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B1736] uppercase mb-3 animate-tagline-blink">
              <Sparkles className="w-3.5 h-3.5" />
              Easy Crystal Care
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C0320] leading-tight">
              How to Clean & Charge Your Crystals
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3E0844] to-[#6B1736] mx-auto rounded-full mt-3 mb-2" />
            <p className="text-gray-600 text-xs sm:text-sm font-semibold max-w-2xl mx-auto leading-relaxed">
              Crystals absorb vibes from their surroundings. Cleanse and recharge your gemstone bracelet weekly using these 4 simple steps to keep its positive vibes vibrating at 100%!
            </p>
          </div>

          {/* Interactive Care Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8">
            {[
              { id: 'camphor', label: '1. CAMPHOR SMOKE', desc: 'Incense Cleansing' },
              { id: 'sound', label: '2. SOUND CHARGING', desc: '528Hz Vibration' },
              { id: 'moonlight', label: '3. MOONLIGHT BATH', desc: 'Vibe Recharge' },
              { id: 'ritual', label: '4. MANTRA RITUAL', desc: 'Program Intention' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCleanseTab(tab.id)}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
                  activeCleanseTab === tab.id
                    ? 'bg-[#3E0844] text-white border-transparent shadow-lg shadow-purple-950/25 scale-[1.02]'
                    : 'bg-purple-50/50 text-[#3E0844] border-purple-200 hover:bg-white'
                }`}
              >
                <span className="block text-[10px] font-black uppercase tracking-wider">{tab.label}</span>
                <span className="block text-[9px] font-bold opacity-60 mt-0.5">{tab.desc}</span>
              </button>
            ))}
          </div>

          {/* Tab Display Panel */}
          <div className="bg-purple-50/40 border-2 border-purple-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            {activeCleanseTab === 'camphor' && (
              <>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3E0844] to-[#6B1736] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <Flame className="w-8 h-8" />
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#1C0320]">1. Camphor Smoke Incense Cleansing</h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed">
                    Light a camphor tablet or a sage incense cone. Slowly pass your crystal bracelet through the rising smoke 5 to 7 times. This cleanses previous hand vibrations and keeps the crystal pure.
                  </p>
                  <span className="block text-[9px] font-black text-[#6B1736] uppercase tracking-wider">*Best done when you first receive your crystal.</span>
                </div>
              </>
            )}

            {activeCleanseTab === 'sound' && (
              <>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3E0844] to-[#6B1736] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <Headphones className="w-8 h-8" />
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#1C0320]">2. Sound Charging with Healing Frequencies</h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed">
                    Play a metal singing bowl or a 528Hz healing sound frequency from your phone next to your bracelet for 2 minutes. The sound vibrations charge the crystal beads back to peak positive energy.
                  </p>
                  <span className="block text-[9px] font-black text-[#6B1736] uppercase tracking-wider">*A fast, easy recharge you can do while working!</span>
                </div>
              </>
            )}

            {activeCleanseTab === 'moonlight' && (
              <>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3E0844] to-[#6B1736] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <Moon className="w-8 h-8" />
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#1C0320]">3. Moonlight Bath Vibe Recharge</h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed">
                    Once a month during the Full Moon, place your crystal bracelet on your window sill overnight. The gentle moonbeams will naturally wash away heavy stress and fill the crystal with calm, happy vibes.
                  </p>
                  <span className="block text-[9px] font-black text-[#6B1736] uppercase tracking-wider">*Nature's ultimate cleansing bath. No water required.</span>
                </div>
              </>
            )}

            {activeCleanseTab === 'ritual' && (
              <>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3E0844] to-[#6B1736] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <Gem className="w-8 h-8" />
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#1C0320]">4. Intention Attunement Mantra Ritual</h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed">
                    Hold your bracelet in your left palm. Close your eyes, take 3 deep breaths, and say your daily positive mantra 11 times. This tells the crystal exactly what goal it needs to manifest for you!
                  </p>
                  <span className="block text-[9px] font-black text-[#6B1736] uppercase tracking-wider">*Lock in your manifestation targets every morning.</span>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
