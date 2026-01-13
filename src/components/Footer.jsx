import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { companyInfo, navigationLinks } from '../data/content';
import logo from '../assets/logo.png'; // 1. Import the logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media icon components
  const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: companyInfo.social.linkedin,
      bgGradient: 'from-blue-500 to-blue-600',
      hoverScale: 'hover:scale-110',
      hoverShadow: 'hover:shadow-blue-500/50'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      url: companyInfo.social.instagram,
      bgGradient: 'from-pink-500 via-purple-500 to-orange-500',
      hoverScale: 'hover:scale-110',
      hoverShadow: 'hover:shadow-pink-500/50'
    },
    {
      name: 'Facebook',
      icon: <FacebookIcon />,
      url: companyInfo.social.facebook,
      bgGradient: 'from-blue-600 to-blue-700',
      hoverScale: 'hover:scale-110',
      hoverShadow: 'hover:shadow-blue-600/50'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Column */}
          <div className="space-y-6">
            <div>
              {/* Logo Image */}
              <img 
                src={logo} 
                alt={companyInfo.name} 
                className="h-16 w-auto mb-4 bg-white rounded-lg p-2"
              />
              <p className="text-gray-400 leading-relaxed">
                Empowering innovation through cutting-edge technology solutions and nurturing the next generation of tech leaders.
              </p>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={platform.name}
                    title={platform.name}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.bgGradient} flex items-center justify-center transition-all duration-300 ${platform.hoverScale} ${platform.hoverShadow} hover:shadow-xl relative overflow-hidden`}>
                      <span className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300">
                        {platform.icon}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {platform.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-purple-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white border-opacity-10">
              <h5 className="text-sm font-semibold text-gray-300 mb-3">Legal</h5>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-purple-600 bg-opacity-20 rounded-lg">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm break-all"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 bg-green-500 bg-opacity-20 rounded-lg">
                  <MapPin className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <p className="text-gray-300 text-sm">
                    Techpark KRIC National Engineering College, Kovilpatti - 628503
                  </p>
                </div>
              </li>
            </ul>

            {/* Application CTA - UPDATED LINK HERE */}
            <div className="mt-6 pt-6 border-t border-white border-opacity-10">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSefapGOeFnKEBFLh05kl5pYcIMru1APKnNOlwUS7DQAbY0gNQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                Apply Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white border-opacity-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <p>
                © {currentYear} {companyInfo.name}. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-purple-400 transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-purple-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top/Home Button */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Back to home"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;