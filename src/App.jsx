import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const handleClearCart = () => setCart([]);

  return (
    <div className="relative min-h-screen bg-[#E2D5F3] text-cosmic-cream font-sans overflow-x-hidden selection:bg-gold/30 selection:text-gold">
        {/* Global Scroll to Top on Navigation */}
        <ScrollToTop />

        {/* Centered Logo Navbar Header with Cart States */}
        <Navbar 
          onOpenModal={handleOpenModal} 
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          onAddToCart={handleAddToCart}
        />

        <Routes>
          <Route path="/" element={<Home onOpenModal={handleOpenModal} onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/courses" element={<CoursesPage onOpenModal={handleOpenModal} />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>

        {/* Footnote Footer */}
        <Footer onOpenModal={handleOpenModal} />

        {/* Global Enquire Now Pop-up Modal Form */}
        <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
  );
}
