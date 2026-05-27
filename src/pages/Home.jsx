import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Offerings from '../components/Offerings';
import FeaturesGrid from '../components/FeaturesGrid';
import Products from '../components/Products';
import VideoReviews from '../components/VideoReviews';
import Journey from '../components/Journey';
import Blog from '../components/Blog';
import Podcasts from '../components/Podcasts';
import Testimonials from '../components/Testimonials';

export default function Home({ onOpenModal, onAddToCart }) {
  return (
    <main>
      <Hero onOpenModal={onOpenModal} />
      <Expertise onOpenModal={onOpenModal} />
      <Offerings onOpenModal={onOpenModal} />
      <FeaturesGrid />
      <Products onAddToCart={onAddToCart} />
      <VideoReviews />
      <Journey />
      <Blog />
      <Podcasts />
      <Testimonials />
    </main>
  );
}
