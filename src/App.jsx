import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // REQUIRED: Makes the tags in Entrepreneur.jsx work
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Positions from './components/Positions';
import Entrepreneur from './components/Entrepreneur';
import Application from './components/Application';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import new pages
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Home page component (combines all sections)
function HomePage() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in sections
    const fadeElements = document.querySelectorAll('.fade-in-section, .scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    fadeElements.forEach(el => observer.observe(el));

    // Smooth scroll behavior for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const navHeight = 80;
          const targetPosition = target.offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Cleanup observer on unmount
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Positions />
      <Entrepreneur />
      <Application />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <HelmetProvider> {/* This wrapper enables SEO tags in all child components */}
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          
          <Routes>
            {/* Home page with all sections */}
            <Route path="/" element={<HomePage />} />
            
            {/* Individual pages */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Redirect old URLs to home */}
            <Route path="/home" element={<HomePage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;