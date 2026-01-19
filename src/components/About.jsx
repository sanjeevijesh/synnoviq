import React from 'react';
import { Helmet } from 'react-helmet-async';
import { aboutSection } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <Helmet>
        <title>About Us | Synnoviq Technologies</title>
        <meta 
          name="description" 
          content="Learn about Synnoviq Technologies, our vision, mission, and the innovative culture driving our industry-leading web and mobile solutions." 
        />
      </Helmet>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {aboutSection.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutSection.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aboutSection.features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scroll-reveal-scale scroll-reveal-delay-${(index % 6) + 1}`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights Box */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-white scroll-reveal">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="scroll-reveal-left scroll-reveal-delay-1">
              <h4 className="text-sm font-semibold mb-2 opacity-80">Industry</h4>
              <p className="text-lg font-bold">{aboutSection.highlights.industry}</p>
            </div>
            <div className="scroll-reveal-left scroll-reveal-delay-2">
              <h4 className="text-sm font-semibold mb-2 opacity-80">Vision</h4>
              <p className="text-lg font-bold">{aboutSection.highlights.vision}</p>
            </div>
            <div className="scroll-reveal-left scroll-reveal-delay-3">
              <h4 className="text-sm font-semibold mb-2 opacity-80">Culture</h4>
              <p className="text-lg font-bold">{aboutSection.highlights.culture}</p>
            </div>
            <div className="scroll-reveal-left scroll-reveal-delay-4">
              <h4 className="text-sm font-semibold mb-2 opacity-80">Mission</h4>
              <p className="text-lg font-bold">{aboutSection.highlights.mission}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;