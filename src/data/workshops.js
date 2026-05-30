import mahaLaxmiWealthImg from '../assets/maha_laxmi_wealth.png';
import unicornHealingImg from '../assets/unicorn_healing.png';
import dragonProtectionImg from '../assets/dragon_protection.png';
import angelicHealingImg from '../assets/angelic_healing.png';
import akashicRecordsImg from '../assets/akashic_records.png';
import kundaliniKriyaImg from '../assets/kundalini_kriya.png';
import saraswatiWisdomImg from '../assets/saraswati_wisdom.png';
import kaliProtectionImg from '../assets/kali_protection.png';
import auraShieldImg from '../assets/aura_shield.png';

const defaultWorkshops = [
  {
    id: 'maha-laxmi-workshop',
    title: 'Maha Laxmi, Ashta Lakshmi & Dhan Kuber Workshop',
    subtitle: 'Attract Money, Success, and Positive Energy',
    category: 'Money & Success',
    duration: 'Abundance Activation',
    type: 'Workshop',
    description: 'This special workshop helps you attract money, remove money worries, and bring success and good luck into your life. With simple spiritual exercises and prayers to Goddess Lakshmi, you will learn how to build a happy, rich, and peaceful life.',
    details: 'Step 1: Clearing Worries — Let go of old fears about money and negative thoughts that stop your success.\nStep 2: Attracting Prosperity — Learn simple daily prayers to feel happy, rich, and confident.\nStep 3: Creating a Protection Shield — Learn how to protect your positive energy and maintain your good luck.',
    benefits: [
      'Attract money, success, and good luck',
      'Remove worries about not having enough money',
      'Learn how to feel happy and thankful every day',
      'Grow your career or business easily',
      'Bring peaceful and positive energy into your home',
      'Build strong self-confidence',
      'Learn simple daily prayers and rituals',
      'Protect your positive energy from stress and toxic people'
    ],
    whoCanJoin: [
      'Anyone who wants to improve their financial situation',
      'Anyone who wants to attract better jobs or business opportunities',
      'Anyone ready to let go of fears and feel truly happy'
    ],
    whyChoose: 'This workshop uses simple, practical, and highly effective daily exercises to help you feel confident and positive, helping you attract wealth and success in a natural way.',
    faqs: [
      {
        q: "What will I learn in this money workshop?",
        a: "You will learn simple daily prayers, happy affirmations, and easy exercises to help you think positively about money and success."
      },
      {
        q: "How does it help remove my financial worries?",
        a: "It teaches you to let go of old fears and focus on feeling thankful, which naturally helps open up better opportunities in your life."
      },
      {
        q: "Do I need to practice this daily?",
        a: "Yes, practicing the simple 5-minute daily exercises helps you maintain your positive energy and good luck."
      }
    ],
    image: mahaLaxmiWealthImg
  },
  {
    id: 'unicorn-therapy',
    title: 'Unicorn Healing & Peace Level 1 Workshop',
    subtitle: 'Open Your Heart to Deep Peace and Emotional Healing',
    category: 'Spiritual Healing',
    duration: 'Healing Frequencies',
    type: 'Workshop',
    description: 'This gentle, loving class is designed to help you heal emotional pain, release stress, and find deep inner peace. Using soft, magical unicorn energy, you will learn to clear away sadness and fill your heart with love.',
    details: 'Step 1: Releasing Sadness — Learn to let go of past pain, stress, and heavy emotions.\nStep 2: Filling with Love — Open your heart to feel safe, happy, and fully loved.\nStep 3: Finding Peace — Learn simple breathing and visualization steps to quiet your mind.',
    benefits: [
      'Heal emotional pain and feel peaceful',
      'Release stress, anxiety, and daily worries',
      'Feel deep self-love and happiness',
      'Learn easy breathing exercises for calm living',
      'Clear away negative memories and feel fresh'
    ],
    whoCanJoin: [
      'Anyone feeling stressed, tired, or emotionally heavy',
      'Anyone who wants to feel more love and inner peace',
      'Beginners who want to try gentle meditation'
    ],
    whyChoose: 'It is a very soft, peaceful, and warm class that is perfect for anyone looking to calm their mind, release stress, and bring gentle happiness back into their daily life.',
    faqs: [
      {
        q: "Is this class suitable for beginners?",
        a: "Yes! This is a very gentle class with simple meditations that anyone can easily follow and enjoy."
      },
      {
        q: "How will it help me feel less stressed?",
        a: "You will learn how to focus your mind on calm thoughts and breathe slowly, which instantly helps you relax."
      }
    ],
    image: unicornHealingImg
  },
  {
    id: 'dragon-mastery',
    title: 'Dragon Energy & Spiritual Protection',
    subtitle: 'A Simple 3-Step Course to Feel Strong and Safe',
    category: 'Angels & Protection',
    duration: '3-Level Course',
    type: 'Course',
    description: 'Learn how to use strong, positive dragon energy to protect yourself from stress, bad moods, and negative people. This easy 3-step course helps you build courage, stay fully confident, and achieve your life goals with high self-esteem.',
    details: 'Level 1: Building Strength — Learn how to ground yourself and feel strong, brave, and safe.\nLevel 2: Attracting Success — Use positive energy to focus on your goals and make them real.\nLevel 3: Living Confidently — Master advanced ways to protect your energy and lead others with love.',
    benefits: [
      'Build strong energy protection around you',
      'Keep away other people’s bad moods and stress',
      'Build great courage and self-confidence',
      'Stay fully focused on your goals and dreams',
      'Clear out old negative feelings easily'
    ],
    whoCanJoin: [
      'Anyone who feels easily affected by other people’s stress',
      'Anyone wanting to build deep self-confidence and courage',
      'People who want to learn strong energy exercises'
    ],
    whyChoose: 'This structured course gives you simple, strong, and highly practical tools to shield your mind and stay happy, peaceful, and fully protected every day.',
    faqs: [
      {
        q: "What is dragon energy?",
        a: "It is simply a highly positive, strong, and protective energy that helps you feel safe, brave, and confident."
      },
      {
        q: "How does the protection shield work?",
        a: "It is a simple mental visualization exercise that keeps away toxic moods from others while keeping your own energy happy."
      }
    ],
    image: dragonProtectionImg
  },
  {
    id: 'angelic-healing',
    title: 'Advanced Angelic Healing & Spiritual Protection',
    subtitle: 'Connect with Angels for Peace, Healing, and Protection',
    category: 'Angels & Protection',
    duration: 'Advanced Course',
    type: 'Course',
    description: 'A beautiful program designed to help you connect with positive angel energies. Learn simple ways to heal emotional wounds, shield your home from stress, and find deep wisdom and guidance for your life.',
    details: 'Phase 1: Connecting with Angels — Learn to quiet your mind and listen to gentle guidance.\nPhase 2: Healing and Protection — Learn simple prayers to clear stress and create a safe, happy home.\nPhase 3: Guiding Others — Learn how to help your family and friends feel calm, happy, and balanced.',
    benefits: [
      'Connect with loving and peaceful angel energies',
      'Heal old emotional pain and feel safe',
      'Shield your home and family from negative stress',
      'Improve your focus, intuition, and daily decisions',
      'Learn how to help others heal and feel calm'
    ],
    whoCanJoin: [
      'Anyone seeking peace, protection, and gentle guidance',
      'People who want to learn how to heal themselves and others',
      'Anyone looking for a deeper connection with positive forces'
    ],
    whyChoose: 'This class blends gentle visualizations and prayers to help you create a highly peaceful and protected environment for yourself and your loved ones.',
    faqs: [
      {
        q: "Do I need special skills to connect with angels?",
        a: "No! All you need is an open heart and a quiet space. We teach you everything from the very beginning."
      },
      {
        q: "How does this help my home?",
        a: "You will learn simple prayers that help clear out tense, angry, or stressful feelings, making your home feel very warm and happy."
      }
    ],
    image: angelicHealingImg
  },
  {
    id: 'akashic-records',
    title: 'Akashic Records: Learn to Read Your Soul History',
    subtitle: 'Simple 2-Step Course to Clear Old Life Problems',
    category: 'Spiritual Healing',
    duration: '2-Level Course',
    type: 'Course',
    description: 'This course teaches you how to look into your soul’s history to find the reasons behind your repeating life problems. You will learn to clear old relationship struggles, remove money blocks, and find your true life path.',
    details: 'Level 1: Reading Your History — Learn to safely look at your life’s past choices and find wisdom.\nLevel 2: Clearing Old Blocks — Learn simple ways to let go of old promises or regrets that hold you back today.',
    benefits: [
      'Find the true reasons behind repeating life struggles',
      'Clear out old relationship patterns and feel free',
      'Remove deep worries about money and success',
      'Find your true life purpose and feel happy',
      'Learn to make better choices for your future'
    ],
    whoCanJoin: [
      'Anyone facing repeating blocks in career or relationships',
      'Anyone wanting deep clarity about their life path',
      'Seekers looking for deep, lasting personal healing'
    ],
    whyChoose: 'It helps you solve repeating problems by looking at their real root causes, letting you clear the old blocks and step into a happier and more successful life.',
    faqs: [
      {
        q: "Is it safe to look into past soul history?",
        a: "Yes, it is completely safe. We teach you simple protective steps to keep your mind calm, peaceful, and fully grounded."
      },
      {
        q: "Can this help my current relationships?",
        a: "Yes! By understanding why you keep facing the same arguments or struggles, you can easily clear them and build happy, loving ties."
      }
    ],
    image: akashicRecordsImg
  },
  {
    id: 'laxmi-kuber-attunement',
    title: 'Maha Lakshmi & Dhan Kuber Wealth Activation',
    subtitle: '5-Day Guided Journey for Success and Financial Growth',
    category: 'Money & Success',
    duration: '5-Day Workshop',
    type: 'Workshop',
    description: 'A beautiful 5-day class to help you let go of money fears, feel truly thankful, and attract financial success. Through guided daily prayers, simple mudras, and positive thinking, you will learn to welcome prosperity.',
    details: 'Day 1: Preparing Your Mind — Clear out old stress and prepare to feel positive.\nDay 2: Attracting Opportunities — Learn to focus your mind on wealth and success.\nDay 3: Building Stability — Focus on keeping your money safe and growing it.\nDay 4: Clearing Money Worries — Let go of deep fears about not having enough.\nDay 5: Protecting Your Success — Learn a simple daily routine to keep your energy high.',
    benefits: [
      'Participate in 5 days of live guided prayers for success',
      'Clear out deep-rooted money worries and fears',
      'Learn practical 5-minute daily success exercises',
      'Build a strong protective energy around your finances',
      'Shift your mind from fear of loss to peace and safety'
    ],
    whoCanJoin: [
      'Anyone facing financial worries or career stress',
      'Anyone ready to attract better business or job luck',
      'Anyone who wants to build a positive relation with money'
    ],
    whyChoose: 'This 5-day journey focuses on simple, daily steps that help you reprogram your thoughts, helping you feel peaceful, confident, and ready for success.',
    faqs: [
      {
        q: "How does this 5-day class work?",
        a: "We meet daily for 30 minutes to practice simple prayers, breathing, and positive affirmations together."
      },
      {
        q: "What if I miss a live class?",
        a: "Don't worry! We provide full recordings of each day so you can easily catch up in your free time."
      }
    ],
    image: mahaLaxmiWealthImg
  },
  {
    id: 'kundalini-kriya',
    title: 'Kundalini Kriya Yoga & Breathing Class',
    subtitle: 'Simple Breathing & Energy Awakening for Inner Peace',
    category: 'Yoga & Peace',
    duration: 'Guided Workshop',
    type: 'Workshop',
    description: 'A powerful spiritual class designed to help you wake up your body’s natural energy, balance your mind, and clear away stress. Through simple breathing exercises, gentle movements, and calming sounds, you will find deep peace.',
    details: 'Part 1: Simple Breathing — Learn to breathe slowly to calm your nervous system and reduce stress.\nPart 2: Gentle Movements — Stretch and move gently to release physical tension.\nPart 3: Calming Sounds — Use peaceful mantras to quiet your mind and find inner focus.\nPart 4: Daily Peace Routine — Learn a simple 10-minute routine to practice at home.',
    benefits: [
      'Calm your mind and reduce daily stress instantly',
      'Feel highly energetic, active, and healthy',
      'Release physical and mental tension easily',
      'Learn authentic, simple breathing exercises',
      'Find a deep state of meditation and quiet focus'
    ],
    whoCanJoin: [
      'Anyone who feels stressed, anxious, or tired',
      'People who want to learn easy yoga breathing at home',
      'Beginners wanting a peaceful mind and healthy body'
    ],
    whyChoose: 'This class focuses on simple, safe, and highly practical breathing methods that quickly bring a deep sense of calm, clarity, and health to your life.',
    faqs: [
      {
        q: "Is this class hard to do?",
        a: "No! The movements and breathing are very simple and easy, making them perfect for people of all ages and fitness levels."
      },
      {
        q: "How does breathing help my mind?",
        a: "Slow breathing brings fresh oxygen to your brain, which instantly stops overthinking and reduces stress."
      }
    ],
    image: kundaliniKriyaImg
  },
  {
    id: 'angel-therapy-level3',
    title: 'Diamond Course of Angel Therapy Level 3',
    subtitle: 'Advanced Healing, Card Reading & Life Guidance',
    category: 'Angels & Protection',
    duration: 'Diamond Level',
    type: 'Course',
    description: 'An advanced, beautiful class for those ready to deepen their connection with angel guides. Learn how to do professional angel card readings, offer helpful life guidance to others, and build a strong shield of peace around your life.',
    details: 'Phase 1: Card Reading Mastery — Learn how to read angel card messages easily and give helpful advice.\nPhase 2: Deep Energy Clearing — Learn advanced ways to clear stress and help others feel calm.\nPhase 3: Creating Abundance — Learn simple mental routines to stay positive, confident, and successful.',
    benefits: [
      'Learn how to read angel cards professionally for others',
      'Develop strong intuitive confidence and guiding skills',
      'Create highly peaceful and protected energy spaces',
      'Learn advanced methods to calm stress and anxiety',
      'Gain a certified credential to guide others professionally'
    ],
    whoCanJoin: [
      'Seekers who have completed basic angel classes',
      'Anyone wanting to do card readings for friends or clients',
      'People ready to become certified spiritual guides and mentors'
    ],
    whyChoose: 'This program gives you the exact skills and confidence needed to offer clear, helpful, and highly positive life readings and guidance to others.',
    faqs: [
      {
        q: "Will I be able to do professional card readings after this?",
        a: "Yes! We teach you exactly how to understand card symbols, connect with your intuition, and speak confidently to guide others."
      },
      {
        q: "What is covered in Level 3?",
        a: "We cover advanced card reading layouts, deep energy clearing, and setting up your professional guiding practice."
      }
    ],
    image: angelicHealingImg
  },
  {
    id: 'saraswati-attunement',
    title: 'Saraswati Maa Wisdom & Creativity Workshop',
    subtitle: 'Awaken Wisdom, Creativity, and Speech Confidence',
    category: 'Spiritual Healing',
    duration: 'Wisdom Class',
    type: 'Workshop',
    description: 'A beautiful workshop to help you improve your focus, learning abilities, and speech confidence. With simple prayers to Goddess Saraswati, you will learn to clear creative blocks, speak clearly, and excel in your studies or career.',
    details: 'Phase 1: Improving Focus — Learn simple daily habits to calm your mind and focus on studies.\nPhase 2: Clear Communication — Release fear of public speaking and learn to speak with confidence.\nPhase 3: Unlocking Creativity — Learn simple ways to write, paint, or create with fresh inspiration.',
    benefits: [
      'Awaken wisdom, sharp focus, and learning memory',
      'Build great confidence in public speaking and writing',
      'Clear out creative blocks easily',
      'Perform much better in studies, research, or exams',
      'Bring peaceful and creative energy into your daily work'
    ],
    whoCanJoin: [
      'Students preparing for studies or competitive exams',
      'Writers, artists, and creative professionals',
      'Anyone wishing to speak with confidence and clear creative blocks'
    ],
    whyChoose: 'It combines practical study tips with peaceful prayers to help you focus your mind, study better, and speak with absolute confidence.',
    faqs: [
      {
        q: "How does this help students?",
        a: "It teaches simple breathing and focusing exercises that improve memory, concentration, and calm exam stress."
      },
      {
        q: "Can it help my career?",
        a: "Yes! It helps you clear your throat chakra, letting you express your ideas clearly and speak confidently in meetings."
      }
    ],
    image: saraswatiWisdomImg
  },
  {
    id: 'kali-attunement',
    title: 'Maa Kali Protection & Inner Strength Workshop',
    subtitle: 'Awaken Courage, Protection, and Clear Old Fears',
    category: 'Spiritual Healing',
    duration: 'Courage Class',
    type: 'Workshop',
    description: 'Connect with the powerful, protective energy of Maa Kali to dissolve deep fears, build strong boundaries, and clear away old negative memories. This workshop helps you feel extremely safe, brave, and strong.',
    details: 'Phase 1: Awakening Courage — Learn to face and dissolve hidden fears and worries.\nPhase 2: Clearing Old Regrets — Learn simple ways to let go of old painful memories.\nPhase 3: Building Strong Boundaries — Create a protective shield to keep away toxic energy.',
    benefits: [
      'Build a very strong protective shield of positive energy',
      'Let go of deep-rooted fears, worries, and regrets',
      'Build unshakeable inner strength and willpower',
      'Cut toxic ties with past painful events or people',
      'Feel safe, secure, and fully confident every day'
    ],
    whoCanJoin: [
      'Anyone struggling with fear, anxiety, or heavy thoughts',
      'Anyone needing strong energy protection in their daily life',
      'Seekers ready to clear out old emotional pain and stand strong'
    ],
    whyChoose: 'It helps you access Maa Kali’s protective force to quickly burn away fears and build a strong, peaceful boundary around your mind and body.',
    faqs: [
      {
        q: "Is Maa Kali’s energy safe to work with?",
        a: "Yes, absolutely. Her energy is the ultimate, loving, motherly protection that shields you from all negativity and fear."
      },
      {
        q: "How does it help with fear?",
        a: "It gives you simple mental exercises to face your fears and replace them with strong courage and inner power."
      }
    ],
    image: kaliProtectionImg
  },
  {
    id: 'one-on-one-consultation',
    title: '1-on-1 Personal Life Coaching & Guidance',
    subtitle: 'Private Support to Resolve Life, Money, and Relationship Blocks',
    category: 'Spiritual Healing',
    duration: 'Private Session',
    type: 'Private Session',
    description: 'Book a completely private, confidential coaching call with Neelam Arora to solve your specific life, career, or relationship struggles. Through customized positive statements and practical guidance, she helps you align your mind for success.',
    details: 'Phase 1: Finding the Blocks — We chat privately to find the exact worries holding you back.\nPhase 2: Mindset Audit — Look closely at repeating struggles in your life or career.\nPhase 3: Creating Your Solution — Get a simple, custom daily plan with positive statements written just for you.',
    benefits: [
      'Identify and clear specific career or life struggles privately',
      'Heal relationship worries and build happy, positive ties',
      'Get custom daily affirmations written just to solve your problems',
      'Receive direct, warm, and highly personalized coaching',
      'Enjoy complete, safe, and 100% confidential support'
    ],
    whoCanJoin: [
      'Anyone facing a personal problem they want to solve privately',
      'Anyone wanting specific, personalized guidance for their career or family',
      'Seekers looking for a private, direct call with Neelam Arora'
    ],
    whyChoose: 'This is a completely private and custom call, giving you the direct personal support and practical plan you need to achieve peace and success.',
    faqs: [
      {
        q: "Is my personal call confidential?",
        a: "Yes, 100%. All private coaching calls are fully safe, secure, and completely confidential."
      },
      {
        q: "What will I get from this call?",
        a: "You will get a clear, simple daily plan with custom positive sentences designed specifically to solve your main challenges."
      }
    ],
    image: auraShieldImg
  }
];

// Initialize localStorage if not present
if (typeof window !== 'undefined' && !localStorage.getItem('mm_workshops')) {
  localStorage.setItem('mm_workshops', JSON.stringify(defaultWorkshops));
}

export const WORKSHOPS_DATA = typeof window !== 'undefined' && localStorage.getItem('mm_workshops')
  ? JSON.parse(localStorage.getItem('mm_workshops'))
  : defaultWorkshops;

export const saveWorkshopsData = (data) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mm_workshops', JSON.stringify(data));
  }
};

export const CATEGORIES = ['All', 'Money & Success', 'Spiritual Healing', 'Angels & Protection', 'Yoga & Peace'];
