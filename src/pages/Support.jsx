import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added Import
import { Mail, Phone, Clock, Send, CheckCircle, AlertCircle, FileText, Code, Users } from 'lucide-react';
import { companyInfo } from '../data/content';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  // ... (Keep handleChange and handleSubmit logic exactly as is) ...
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', category: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  const supportCategories = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Application Support",
      description: "Help with job applications and recruitment process",
      email: "synnoviqtechnologies@gmail.com",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Support",
      description: "Website issues, online assessments, technical problems",
      email: "synnoviqtechnologies@.com",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "General Inquiries",
      description: "Company information, partnerships, general questions",
      email: companyInfo.email,
      gradient: "from-green-500 to-green-600"
    }
  ];

  // UPDATED: Removed Blog and Documentation links as requested
  const quickLinks = [
    { title: "FAQs", link: "/faq", description: "Common questions and answers" },
    { title: "Privacy Policy", link: "/privacy", description: "Read our privacy guidelines" },
    { title: "Terms of Service", link: "/terms", description: "Review our terms of use" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">We're Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Support
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Having trouble? Our support team is ready to assist you with any questions or issues.
          </p>
          {/* Added Back to Home Button here for better navigation */}
          <div className="mt-8">
             <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold transition-colors hover:bg-gray-100"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-16">
        {/* Support Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-white mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <a
                href={`mailto:${category.email}`}
                className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {category.email}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Get a response within 24 hours
            </p>
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              {companyInfo.email}
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Mon-Fri, 9 AM - 6 PM IST
            </p>
            <a
              href={`tel:${companyInfo.phone}`}
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              {companyInfo.phone}
            </a>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
            <p className="text-gray-600">
              Mon-Fri: 9 AM - 6 PM<br />
              Sat: 10 AM - 2 PM<br />
              Sun: Closed
            </p>
          </div>
        </div>

        {/* Support Form */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Submit a Support Request
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    disabled={formStatus === 'sending'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                  Support Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  disabled={formStatus === 'sending'}
                >
                  <option value="">Select a category</option>
                  <option value="application">Application Support</option>
                  <option value="technical">Technical Support</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug">Report a Bug</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Brief description of your issue"
                  disabled={formStatus === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Please provide as much detail as possible about your issue..."
                  disabled={formStatus === 'sending'}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl ${
                  formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Request Submitted!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Request
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-semibold">Support request submitted successfully!</p>
                    <p className="text-green-700 text-sm mt-1">
                      We'll get back to you within 24-48 hours. Check your email for updates.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Self-Help Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              /* UPDATED: Changed from <a> to <Link> */
              <Link
                key={index}
                to={link.link}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group block"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600">
                  {link.description}
                </p>
                <div className="mt-4 text-purple-600 font-semibold flex items-center gap-2">
                  Learn More
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;