import React from 'react';
import { Link } from 'react-router-dom'; // Added Import
import { Shield, Lock, Eye, UserCheck, Database, FileText, Mail } from 'lucide-react';

const Privacy = () => {
  // ... (Keep existing sections array exactly as is) ...
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "1. Introduction",
      content: "Synnoviq Technologies ('we,' 'us,' or 'our') respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our services, apply for positions, or interact with our website."
    },
    // ... (rest of sections)
  ];

  // ... (Keep additionalSections array exactly as is) ...
  const additionalSections = [
    {
      title: "7. Cookies Policy",
      content: "We use cookies and similar technologies to enhance your experience:",
      items: [
        "Essential cookies: Required for website functionality",
        "Analytics cookies: Help us understand site usage",
        "Preference cookies: Remember your settings",
        "Marketing cookies: Deliver relevant advertisements"
      ],
      note: "You can control cookies through your browser settings. Disabling certain cookies may affect website functionality."
    },
    // ... (rest of additionalSections)
    {
      title: "13. Contact Us",
      content: "For any privacy-related questions, concerns, or requests, please contact us:",
      contact: true
    }
  ];
  
  // Note: I'm not rendering the full arrays here to save space, 
  // but in your file keep the full data arrays you already have.
  // The layout below handles the rendering.

  // Re-adding the full arrays so you can copy-paste the file completely without breaking it:
  const fullSections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "1. Introduction",
      content: "Synnoviq Technologies ('we,' 'us,' or 'our') respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our services, apply for positions, or interact with our website."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "2. Information We Collect",
      content: "We collect various types of information to provide and improve our services:",
      list: [
        {
          subtitle: "Personal Information:",
          items: [
            "Name, email address, phone number",
            "Educational qualifications and academic records",
            "Resume/CV and work history",
            "Portfolio links and project demonstrations",
            "Professional references"
          ]
        },
        {
          subtitle: "Technical Information:",
          items: [
            "IP address and device information",
            "Browser type and version",
            "Cookies and usage data",
            "Pages visited and time spent on site"
          ]
        }
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "3. How We Use Your Information",
      content: "We use your information for the following purposes:",
      items: [
        "Process your job and internship applications",
        "Communicate with you about opportunities and updates",
        "Evaluate your qualifications and suitability for positions",
        "Improve our website and services",
        "Send relevant updates and newsletters (with your consent)",
        "Comply with legal obligations and regulations",
        "Conduct internal analytics and research"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "4. Data Security",
      content: "We implement appropriate security measures to protect your personal data:",
      items: [
        "Encrypted data transmission using SSL/TLS protocols",
        "Secure server storage with regular backups",
        "Limited access to authorized personnel only",
        "Regular security audits and vulnerability assessments",
        "Password-protected systems and two-factor authentication",
        "Employee training on data protection practices"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "5. Data Sharing and Disclosure",
      content: "We do NOT sell your personal information. We may share data only in these circumstances:",
      items: [
        "With service providers who assist in application processing (under strict confidentiality agreements)",
        "With legal authorities when required by law or to protect our rights",
        "With third-party services you explicitly consent to",
        "In case of business transfer or merger (you will be notified)"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "6. Your Rights",
      content: "You have the following rights regarding your personal data:",
      items: [
        "Access: Request a copy of your personal data",
        "Correction: Update or correct inaccurate information",
        "Deletion: Request deletion of your data (subject to legal requirements)",
        "Restriction: Limit how we process your data",
        "Portability: Receive your data in a structured format",
        "Opt-out: Unsubscribe from marketing communications",
        "Withdraw Consent: Revoke previously given consent"
      ],
      note: "To exercise any of these rights, contact us at: privacy@synnoviq.com"
    }
  ];

  const fullAdditionalSections = [
    {
      title: "7. Cookies Policy",
      content: "We use cookies and similar technologies to enhance your experience:",
      items: [
        "Essential cookies: Required for website functionality",
        "Analytics cookies: Help us understand site usage",
        "Preference cookies: Remember your settings",
        "Marketing cookies: Deliver relevant advertisements"
      ],
      note: "You can control cookies through your browser settings. Disabling certain cookies may affect website functionality."
    },
    {
      title: "8. Data Retention",
      content: "We retain your data for the following periods:",
      items: [
        "Application data: 1 year after application or until withdrawal",
        "Employee data: 7 years after employment ends (as per Indian law)",
        "Marketing data: Until you unsubscribe or request deletion",
        "Website analytics: Up to 2 years"
      ]
    },
    {
      title: "9. Third-Party Links",
      content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information."
    },
    {
      title: "10. Children's Privacy",
      content: "Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately."
    },
    {
      title: "11. International Data Transfers",
      content: "Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in compliance with applicable laws."
    },
    {
      title: "12. Changes to Privacy Policy",
      content: "We may update this privacy policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by:",
      items: [
        "Posting the updated policy on our website",
        "Sending an email notification (for significant changes)",
        "Displaying a notice on our homepage"
      ],
      note: "The 'Last Updated' date at the top of this policy indicates when it was last revised."
    },
    {
      title: "13. Contact Us",
      content: "For any privacy-related questions, concerns, or requests, please contact us:",
      contact: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl opacity-90">
              Last Updated: January 11, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        {/* Main Sections */}
        <div className="space-y-8 mb-16">
          {fullSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 text-purple-600">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {section.content}
                  </p>

                  {section.items && (
                    <ul className="space-y-2 ml-4">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1.5">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.list && (
                    <div className="space-y-4 mt-4">
                      {section.list.map((listItem, idx) => (
                        <div key={idx}>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {listItem.subtitle}
                          </h3>
                          <ul className="space-y-2 ml-4">
                            {listItem.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2">
                                <span className="text-purple-600 mt-1.5">•</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.note && (
                    <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
                      <p className="text-gray-700">
                        <strong>Note:</strong> {section.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="space-y-6">
          {fullAdditionalSections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {section.content}
              </p>

              {section.items && (
                <ul className="space-y-2 ml-4 mb-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1.5">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.note && (
                <p className="text-sm text-gray-600 italic mt-2">
                  {section.note}
                </p>
              )}

              {section.contact && (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Email:</p>
                      <a href="mailto:privacy@synnoviq.com" className="text-purple-600 hover:text-purple-700">
                        synnoviqtechnologies@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Address:</p>
                      <p className="text-gray-700">KRIC Techpark, National Engineering College Kovilpatti, Tamil Nadu, India 628503</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Questions About Your Privacy?
          </h3>
          <p className="text-gray-600 mb-6">
            We're committed to protecting your data. If you have any concerns, please reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:synnoviqtechnologies@gmail.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Contact Privacy Team
            </a>
            {/* UPDATED: Changed from <a> to <Link> and added scroll logic */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-600 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;