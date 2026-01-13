import React from 'react';
import { Briefcase, CheckCircle, Award } from 'lucide-react';
import { positionsSection, eligibility, benefits, companyInfo } from '../data/content';

const Positions = () => {
  return (
    <section id="positions" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {positionsSection.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {positionsSection.subtitle}
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {positionsSection.positions.map((position, index) => (
            <div
              key={position.id}
              className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300 group scroll-reveal scroll-reveal-delay-${(index % 6) + 1}`}
            >
              <div className="text-5xl mb-4">{position.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                {position.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {position.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {position.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Apply Now
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Eligibility Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12 scroll-reveal">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-8 h-8 text-purple-600" />
            <h3 className="text-3xl font-bold text-gray-900">
              Who Can Apply?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-reveal-left">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Academic Requirements</h4>
              <ul className="space-y-3">
                {eligibility.academic.items.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="scroll-reveal-right">
              <h4 className="text-xl font-bold mb-4 text-gray-900">General Requirements</h4>
              <ul className="space-y-3">
                {eligibility.general.items.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section - 3x2 Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 scroll-reveal">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow scroll-reveal-scale scroll-reveal-delay-${(index % 6) + 1}`}
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center scroll-reveal-scale">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">🔥</span>
            <h3 className="text-2xl md:text-3xl font-bold">
              Limited Positions Available!
            </h3>
            <span className="text-3xl">🔥</span>
          </div>
          <p className="text-lg mb-6 opacity-95">
            Don't miss this opportunity to join our innovative team
          </p>
          <a
            href={companyInfo.formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Apply Before It's Too Late!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Positions;