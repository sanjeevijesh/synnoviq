import React from 'react';
import { FileText, AlertTriangle, Clock, CheckCircle2, QrCode } from 'lucide-react';
import { applicationSection, companyInfo } from '../data/content';

const Application = () => {
  return (
    <section
      id="apply"
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -right-48 animate-float" />
        <div className="absolute w-64 h-64 bg-white rounded-full -bottom-32 -left-32 animate-float" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 text-white scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <FileText className="w-5 h-5" />
            <span className="font-semibold">Ready to Join?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {applicationSection.title}
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            {applicationSection.subtitle}
          </p>
        </div>

        {/* Triangle Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Scan to Apply & What You'll Need (stacked) */}
            <div className="space-y-8">
              {/* Scan to Apply */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 scroll-reveal-left">
                <div className="flex items-center gap-3 mb-6 text-white">
                  <QrCode className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Scan to Apply</h3>
                </div>
                
                {/* QR Code */}
                <div className="bg-white p-6 rounded-xl mb-6 flex justify-center">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(companyInfo.applicationForm)}`}
                    alt="Application Form QR Code"
                    className="w-48 h-48"
                  />
                </div>
                
                <p className="text-white text-center mb-6 opacity-90">
                  Scan this QR code with your phone camera to open the application form instantly!
                </p>

                {/* Form Link Button */}
                <a
                  href={companyInfo.applicationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-xl"
                >
                  Or Click Here to Apply
                </a>
              </div>

              {/* What You'll Need */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 text-white scroll-reveal-left scroll-reveal-delay-2">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                  What You'll Need
                </h3>
                <ul className="space-y-3">
                  {applicationSection.formFields.map((field, index) => (
                    <li key={index} className="flex items-start gap-3 opacity-90">
                      <span className="text-orange-400 mt-1">✓</span>
                      <span>{field}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Selection Timeline (centered vertically) */}
            <div className="flex items-center">
              <div className="w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 text-white scroll-reveal-right">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-orange-400" />
                  <h3 className="text-2xl font-bold">Selection Timeline</h3>
                </div>

                <div className="space-y-6">
                  {applicationSection.timeline.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-orange-500 bg-opacity-30 flex items-center justify-center font-bold border-2 border-orange-400">
                          {index + 1}
                        </div>
                        {index < applicationSection.timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-white bg-opacity-20 my-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h4 className="font-semibold text-lg mb-1">{step.phase}</h4>
                        <p className="opacity-80 text-sm mb-1">{step.description}</p>
                        <p className="text-orange-300 text-sm font-semibold">{step.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Warnings Section */}
        <div className="mt-12 max-w-4xl mx-auto scroll-reveal scroll-reveal-delay-3">
          <div className="bg-red-500 bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 border-2 border-red-400 border-opacity-40">
            <div className="flex items-start gap-4 mb-6 text-white">
              <AlertTriangle className="w-6 h-6 text-red-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-red-200">
                  ⚠️ Important Legal Notice
                </h3>
                <p className="opacity-95 mb-4">
                  Please read these warnings carefully before applying:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {applicationSection.warnings.map((warning, index) => (
                <div 
                  key={index} 
                  className="bg-white bg-opacity-5 rounded-lg p-4 border border-red-400 border-opacity-20 text-white"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-red-300 font-bold flex-shrink-0">⚠</span>
                    <p className="opacity-95">{warning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 text-white scroll-reveal scroll-reveal-delay-4">
          <p className="text-xl mb-6 opacity-95">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-xl"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default Application;