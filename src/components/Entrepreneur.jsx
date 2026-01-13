import React from 'react';
import { Lightbulb, TrendingUp, Rocket, CheckCircle } from 'lucide-react';
import { entrepreneurSection, companyInfo } from '../data/content';

const Entrepreneur = () => {
  return (
    <section
      id="entrepreneur"
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full -top-48 -right-48 animate-float" />
        <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full -bottom-32 -left-32 animate-float" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 text-white scroll-reveal">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="font-semibold">🚀 Startup Support Program</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {entrepreneurSection.title}
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            {entrepreneurSection.subtitle}
          </p>
          <p className="text-lg mt-4 max-w-3xl mx-auto opacity-90">
            {entrepreneurSection.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {entrepreneurSection.benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-2 scroll-reveal-scale scroll-reveal-delay-${(index % 4) + 1}`}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm opacity-90">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {entrepreneurSection.features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 text-center shadow-xl scroll-reveal-scale scroll-reveal-delay-${index + 1}`}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {index === 0 && <Lightbulb className="w-8 h-8 text-purple-600" />}
                {index === 1 && <TrendingUp className="w-8 h-8 text-purple-600" />}
                {index === 2 && <Rocket className="w-8 h-8 text-purple-600" />}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-16 scroll-reveal max-w-3xl mx-auto">
          {entrepreneurSection.stats.map((stat, index) => (
            <div key={index} className={`text-center text-white scroll-reveal-delay-${index + 1}`}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* What We're Looking For */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            What We're Looking For
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entrepreneurSection.lookingFor.items.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors scroll-reveal-scale scroll-reveal-delay-${(index % 4) + 1}`}
              >
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center scroll-reveal">
          <a
            href={companyInfo.formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Apply as Entrepreneur
          </a>
          <p className="text-white text-sm mt-4 opacity-80">
            Applications reviewed within 1 week
          </p>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneur;