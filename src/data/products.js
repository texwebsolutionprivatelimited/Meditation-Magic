const defaultProducts = [
  {
    id: 1,
    title: 'Multi Fluorite Crystal Bracelet',
    price: 1111,
    rating: 5,
    badge: 'Best Seller',
    badgeColor: 'bg-[#FFD95A] text-[#3E0844]',
    tagline: 'Focus · Clarity · Freedom',
    accent: 'from-[#a78bfa] to-[#7c3aed]',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Supreme Mental Clarity & Decision Making Shield',
    description: 'Multi Fluorite is a highly protective and psychic crystal. It clears mental fog, increases concentration, and cleanses the energy field of negative thoughts, replacing them with joy, alignment, and supreme spiritual focus.',
    benefits: [
      'Increases memory, mental focus, and decision-making clarity',
      'Protects against psychic attacks and negative mental energies',
      'Balances the Heart, Throat, and Third Eye Chakras',
      'Dissolves stress, anxiety, and disorganized thoughts'
    ],
    specifications: {
      material: '100% Genuine Natural Multi-Colored Fluorite Crystals',
      beadsSize: '8mm standard polished beads',
      elasticity: 'Ultra-durable stretchable cord (One size fits all)',
      origin: 'Ethically sourced from prime natural mines'
    },
    howToUse: [
      'Wear it on your non-dominant hand (usually left hand) to absorb its positive healing vibrations.',
      'Before wearing, sit quietly for 2 minutes, hold it in your palms, and state your focus intention.',
      'Cleanse it once a week under moonlight or beside a singing bowl to maintain its peak vibration.'
    ],
    energization: 'Blessed and programmed personally by Neelam Arora during our live Maha Laxmi Wealth workshop, energized with 528Hz frequency sound healing.'
  },
  {
    id: 2,
    title: 'Tiger Eye Bracelet',
    price: 899,
    rating: 5,
    badge: 'Top Rated',
    badgeColor: 'bg-amber-100 text-amber-700',
    tagline: 'Courage · Strength · Grounding',
    accent: 'from-[#fbbf24] to-[#d97706]',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b1a3a2c68f?auto=format&fit=crop&w=800&q=80',
    subtitle: 'The Ultimate Stone of Courage, Protection & Luck',
    description: 'A stone of power, courage, and supreme protection, Tiger Eye shields you from negative intentions while anchoring your personal authority. It brings good fortune, focus, and the strength to manifest abundance.',
    benefits: [
      'Instills powerful self-confidence, willpower, and fearlessness',
      'Shields from evil eye (Nazar), jealousy, and negative vibes',
      'Attracts wealth, business luck, and career growth opportunities',
      'Strongly grounds energy, bringing emotional stability and balance'
    ],
    specifications: {
      material: 'A-Grade Natural Golden-Brown Tiger Eye Stones',
      beadsSize: '8mm premium round beads',
      elasticity: 'Durable dual-thread stretchable band',
      origin: 'Sourced from high-grade natural deposits'
    },
    howToUse: [
      'Wear it on your dominant hand (usually right hand) for active protection and manifestation power.',
      'Chant a wealth or confidence mantra 11 times when placing the bracelet on your wrist.',
      'Avoid exposing it to harsh chemicals or perfumes to preserve its rich natural luster.'
    ],
    energization: 'Cleansed with camphor smoke and energized by Neelam Arora with special Protection and Courage seed syllables (Beej Mantras).'
  },
  {
    id: 3,
    title: 'Amethyst Healing Bracelet',
    price: 1299,
    rating: 5,
    badge: 'Premium',
    badgeColor: 'bg-purple-100 text-purple-700',
    tagline: 'Wisdom · Peace · Intuition',
    accent: 'from-[#c084fc] to-[#9333ea]',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Divine Intuition, Stress Relief & Crown Chakra Attunement',
    description: 'Amethyst is a legendary stone of deep peace, divine connection, and emotional stability. It activates the Crown Chakra, enhances spiritual wisdom, aids in deep meditation, and forms a shield of light around your body.',
    benefits: [
      'Relieves chronic stress, anxiety, and sleeplessness (insomnia)',
      'Magnifies spiritual intuition, inner wisdom, and psychic connection',
      'Helps break negative habits, addictions, and toxic cycles',
      'Purifies auric field and establishes profound peace of mind'
    ],
    specifications: {
      material: 'Genuine Deep Purple Amethyst Gemstones',
      beadsSize: '8mm high-polish round beads',
      elasticity: 'Super-strength elastic cord',
      origin: 'Ethically mined from Brazilian volcanic geodes'
    },
    howToUse: [
      'Wear on your left hand for inner calm, sleep support, and absorbing peaceful vibes.',
      'Place it next to your pillow or wear during meditation to access deeper states of consciousness.',
      'Charge it on a Selenite plate or under the Full Moon once a month.'
    ],
    energization: 'Charged with Crown Chakra opening frequencies and blessed during Neelam Arora’s Kundalini Activation live circles.'
  },
  {
    id: 4,
    title: 'Rose Quartz Love Bracelet',
    price: 999,
    rating: 5,
    badge: 'New',
    badgeColor: 'bg-rose-100 text-rose-600',
    tagline: 'Love · Harmony · Self-care',
    accent: 'from-[#fb7185] to-[#e11d48]',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Universal Love, Deep Heart Healing & Compassion Magnet',
    description: 'The stone of absolute universal love, Rose Quartz opens up the Heart Chakra to attract true relationships, restore trust in existing marriages, heal childhood emotional wounds, and cultivate deep self-love and inner harmony.',
    benefits: [
      'Attracts harmonious love, soulmates, and soulful friendships',
      'Heals childhood trauma, emotional heartbreak, and unresolved grief',
      'Inspires high self-esteem, self-forgiveness, and gentle compassion',
      'Promotes peace, emotional reconciliation, and relationship trust'
    ],
    specifications: {
      material: 'Natural High-Grade Translucent Rose Quartz Stones',
      beadsSize: '8mm smooth polished beads',
      elasticity: 'Ultra-stretch comfortable cord',
      origin: 'Ethically sourced from high-energy Madagascar deposits'
    },
    howToUse: [
      'Wear on the left wrist (receiving side) to absorb self-love, compassion, and emotional healing.',
      'Hold it to your heart chakra and say: "I open my heart to give and receive pure unconditional love."',
      'Rinse gently under cool tap water to physically cleanse and renew its gentle shine.'
    ],
    energization: 'Blessed in a special Heart Chakra Activation ceremony by Neelam Arora, imbued with pure frequencies of divine love and harmony.'
  },
  {
    id: 5,
    title: 'Black Tourmaline Bracelet',
    price: 1199,
    rating: 5,
    badge: 'Protection',
    badgeColor: 'bg-gray-900 text-white',
    tagline: 'Shield · Cleanse · Protect',
    accent: 'from-[#6b7280] to-[#1f2937]',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Ultimate Psychic Defense Shield & Negative Energy Repeller',
    description: 'Black Tourmaline is the premier stone of ultimate energetic protection. It acts as an absolute psychic shield, absorbing and neutralizing negative energies, black magic, radiation from electronics (EMFs), and hostile thoughts.',
    benefits: [
      'Forms a powerful auric shield against hostile energies and ill wishes',
      'Absorbs and converts toxic EMF radiation from phones and laptops',
      'Relieves intense stress, anxiety, and panic attacks instantly',
      'Strongly aligns physical and spiritual energy, providing vital grounding'
    ],
    specifications: {
      material: 'Genuine A-Grade Rough/Polished Black Tourmaline',
      beadsSize: '8mm premium protective beads',
      elasticity: 'Double reinforced stretch cord',
      origin: 'Sourced from rich protective mineral veins'
    },
    howToUse: [
      'Wear on either hand when going into crowded or stressful environments to repel negative vibes.',
      'Place it next to your mobile phone or laptop while working to repel EMF radiation.',
      'Cleanse frequently by placing it on rock salt overnight to draw out absorbed toxins.'
    ],
    energization: 'Blessed with specific high-vibrational shielding syllables and camphor energized by Neelam Arora to maximize defensive auric shields.'
  },
  {
    id: 6,
    title: 'Lapis Lazuli Bracelet',
    price: 1499,
    rating: 5,
    badge: 'Rare',
    badgeColor: 'bg-blue-100 text-blue-700',
    tagline: 'Truth · Awareness · Wisdom',
    accent: 'from-[#60a5fa] to-[#1d4ed8]',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Royal Stone of Ancient Wisdom, Truth & Voice Activation',
    description: 'Lapis Lazuli, the stone of royalty and deep wisdom, activates the Throat and Third Eye Chakras. It empowers you to speak your authentic truth, enhances creative self-expression, sharpens intellect, and reveals your inner divine truth.',
    benefits: [
      'Empowers clear, confident public speaking and authentic expression',
      'Boosts creativity, intellect, memory, and spiritual learning',
      'Opens the Third Eye to reveal inner truth, clarity, and intuition',
      'Aligns physical, emotional, and spiritual bodies to cosmic truth'
    ],
    specifications: {
      material: 'Genuine Deep Royal Blue Lapis Lazuli with Pyrite Flecks',
      beadsSize: '8mm standard polished beads',
      elasticity: 'Ultra-durable flexible elastic cord',
      origin: 'Mined from ancient, authentic royal deposits'
    },
    howToUse: [
      'Wear on your left hand to channel inner wisdom, or on your right hand to confidently project your voice.',
      'Wear during presentations, interviews, or channelings to activate the Throat chakra.',
      'Keep dry; cleanse using sage smoke or sound waves instead of water.'
    ],
    energization: 'Energized with specific throat chakra sound vibrations (HAM) and high-level abundance coding by Neelam Arora.'
  }
];

// Initialize localStorage if not present
if (typeof window !== 'undefined' && !localStorage.getItem('mm_products')) {
  localStorage.setItem('mm_products', JSON.stringify(defaultProducts));
}

export const PRODUCTS_DATA = typeof window !== 'undefined' && localStorage.getItem('mm_products')
  ? JSON.parse(localStorage.getItem('mm_products'))
  : defaultProducts;

export const saveProductsData = (data) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mm_products', JSON.stringify(data));
  }
};
