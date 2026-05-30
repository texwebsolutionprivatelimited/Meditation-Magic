import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO_MAP = {
  '/': {
    title: 'Meditation Magic with Neelam Arora | Law of Attraction & Subconscious Reprogramming',
    desc: 'Reprogram your subconscious mind, attract financial abundance, heal emotional wounds, and manifest your dream reality through guided meditation and Law of Attraction with Neelam Arora.'
  },
  '/about': {
    title: 'About Neelam Arora | Founder of Meditation Magic',
    desc: 'Meet Neelam Arora, an International Energy Facilitator & Direct Channel of Divine Consciousness with 19+ years of experience helping seekers shift from 3D to 5D consciousness.'
  },
  '/courses': {
    title: 'Spiritual Courses & Workshops | Meditation Magic',
    desc: 'Explore high-frequency spiritual workshops including Maha Laxmi Abundance, Maa Kali Protection, Dragon Mastery, Akashic Records, and Unicorn Therapy.'
  },
  '/counseling': {
    title: '1-to-1 Subconscious & Spiritual Consultation | Neelam Arora',
    desc: 'Book a personal, high-frequency 1-on-1 counseling session with Neelam Arora to remove chakra implants, release timeline blockages, and clear old programming.'
  },
  '/products': {
    title: 'Energized Crystals & Blessed Bracelets | Meditation Magic',
    desc: 'Shop premium, certified AAA grade crystal bracelets and combinations, hand-purified with Ganga jal and charged by Neelam Arora with 5D manifestation mantras.'
  },
  '/blog': {
    title: 'Spiritual Wisdom Blog & Guidance | Meditation Magic',
    desc: 'Read deep spiritual articles, meditation guides, subconscious reprogramming techniques, and manifestation secrets by Neelam Arora.'
  },
  '/contact': {
    title: 'Connect & Inquire | Meditation Magic with Neelam Arora',
    desc: 'Submit your query or register for our daily meditation classes, advanced workshops, and blessed crystals. Get in touch with our team today.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Meditation Magic',
    desc: 'Read the privacy policy and data protection terms for Meditation Magic.'
  },
  '/refund-policy': {
    title: 'Refund Policy | Meditation Magic',
    desc: 'Read the refund policy and course/product cancellation terms for Meditation Magic.'
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Meditation Magic',
    desc: 'Read the terms of use and service agreements for Meditation Magic.'
  },
  '/admin': {
    title: 'Admin Dashboard | Meditation Magic',
    desc: 'Secure cloud content management panel for Meditation Magic.'
  }
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to the top of the viewport
    window.scrollTo(0, 0);

    // 2. Set dynamic Google SEO values for static pages
    // (Details pages like /courses/:id, /products/:id, /blog/:id manage their own titles dynamically)
    if (SEO_MAP[pathname]) {
      const { title, desc } = SEO_MAP[pathname];
      document.title = title;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', desc);
      }
    }
  }, [pathname]);

  return null;
}
