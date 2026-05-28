import React, { useState } from 'react';
import Hero from '../components/Hero';
import AboutBrief from '../components/AboutBrief';
import Expertise from '../components/Expertise';
import Offerings from '../components/Offerings';
import FeaturesGrid from '../components/FeaturesGrid';
import Products from '../components/Products';
import VideoReviews from '../components/VideoReviews';
import Testimonials, { WriteTestimonialForm } from '../components/Testimonials';
import Blog from '../components/Blog';
import Podcasts from '../components/Podcasts';

export default function Home({ onOpenModal, onAddToCart }) {
  // Testimonials State lifted up to Home Page level
  const [testimonialsList, setTestimonialsList] = useState([
    {
      name: 'Shanti Sanap',
      role: 'Kundalini Kriya Yoga Graduate',
      content: 'The Kundalini Kriya Yoga course completely changed my life! The simple breathing exercises are very easy to follow. I feel so active and peaceful every morning. My family is so happy to see this change in me!',
      rating: 5,
    },
    {
      name: 'Garvit Bansal',
      role: 'Maha Laxmi Workshop Graduate',
      content: 'The 5-day Lakshmi Kuber abundance workshop is magical! I learned simple wealth codes and used them for my digital marketing business. Clients started coming in instantly and business is booming now!',
      rating: 5,
    },
    {
      name: 'Pallavi Hadawale',
      role: 'Akashic Records Graduate',
      content: 'I joined the Akashic Records course to clear repeated career blockages. The simple lessons helped me cut family lack timelines and clear my mind. I got my dream job with an amazing package!',
      rating: 5,
    },
    {
      name: 'Kiran Patel',
      role: 'Dragon Energy Course Graduate',
      content: 'I am a healer, and the Dragon Protection course taught me simple ways to build a strong light shield around me. I now stay perfectly safe from daily stress and negative energy.',
      rating: 5,
    },
  ]);

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <main>
      <Hero onOpenModal={onOpenModal} />
      <Expertise onOpenModal={onOpenModal} />
      <Offerings onOpenModal={onOpenModal} />
      <FeaturesGrid />
      <Products limit={4} />
      <AboutBrief />
      <VideoReviews />
      
      {/* Testimonials Slider (Placed right below video reviews) */}
      <Testimonials 
        testimonialsList={testimonialsList}
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
      />
      
      <Blog limit={4} />
      <Podcasts />

      {/* Share Your Review Split Form (Placed at the very bottom of the page) */}
      <WriteTestimonialForm 
        onAddTestimonial={(newTestimonial) => {
          setTestimonialsList((prev) => [newTestimonial, ...prev]);
          setActiveIdx(0); // Instantly slide slider to the newly added review

          // Smoothly scroll the user back to the Testimonials slider so they can see their review live
          const el = document.getElementById('testimonials');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </main>
  );
}
