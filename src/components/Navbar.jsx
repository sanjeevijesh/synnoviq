import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationLinks, companyInfo } from '../data/content';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle navigation click
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    
    // If we're on home page, just scroll to section
    if (isHomePage && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo - Always goes to home */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-purple-600' : 'text-white'
            }`}
            style={isScrolled ? {} : { textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            {companyInfo.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link, index) => {
              // If on home page, use anchor links
              if (isHomePage) {
                return (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`font-medium transition-colors ${
                      isScrolled
                        ? 'text-gray-700 hover:text-purple-600'
                        : 'text-white hover:text-purple-200'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              } else {
                // If on other pages, go to home page first then scroll
                return (
                  <Link
                    key={index}
                    to={`/${link.href}`}
                    className={`font-medium transition-colors ${
                      isScrolled
                        ? 'text-gray-700 hover:text-purple-600'
                        : 'text-white hover:text-purple-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }
            })}
            
            {/* UPDATED: Desktop Apply Now Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSefapGOeFnKEBFLh05kl5pYcIMru1APKnNOlwUS7DQAbY0gNQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navigationLinks.map((link, index) => {
              if (isHomePage) {
                return (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    {link.name}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={index}
                    to={`/${link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              }
            })}
            
            {/* UPDATED: Mobile Apply Now Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSefapGOeFnKEBFLh05kl5pYcIMru1APKnNOlwUS7DQAbY0gNQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-4 mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors"
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;