import React from 'react';
import { Link } from 'react-router-dom'; // Added Import
import { FileText, AlertTriangle, Shield, Scale, Users, Briefcase } from 'lucide-react';

const Terms = () => {
  // ... (Keep existing sections and additionalSections exactly as is, just re-declaring for complete file) ...
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "1. Acceptance of Terms",
      content: "By accessing or using Synnoviq Technologies' website, services, or applying for positions, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "2. Services Description",
      content: "Synnoviq Technologies provides the following services:",
      items: [
        "Job and internship recruitment opportunities",
        "Technology solutions and consulting services",
        "Entrepreneur support and mentorship programs",
        "Educational resources and training materials",
        "Professional development opportunities"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "3. User Responsibilities",
      content: "When using our services, you agree to:",
      items: [
        "Provide accurate, current, and complete information during registration and application",
        "Maintain the confidentiality of your account credentials",
        "Use services lawfully and in accordance with these terms",
        "Not engage in any fraudulent, abusive, or illegal activities",
        "Respect intellectual property rights of Synnoviq Technologies and others",
        "Not attempt to gain unauthorized access to our systems or networks",
        "Notify us immediately of any unauthorized use of your account"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "4. Application Process and Legal Warning",
      content: "All applicants must adhere to the following:",
      subsections: [
        {
          subtitle: "Applicants Must:",
          items: [
            "Submit genuine and verifiable information",
            "Respond to communications within 48 hours",
            "Attend scheduled interviews and assessments",
            "Provide accurate educational credentials and work history",
            "Be available for verification processes"
          ]
        },
        {
          subtitle: "⚠️ Legal Consequences for Violations:",
          items: [
            "Criminal proceedings under IPC Section 420 (Cheating and dishonesty)",
            "Permanent blacklisting from all Synnoviq opportunities",
            "Notification to educational institutions about misconduct",
            "Civil liability for damages caused",
            "Legal action for identity theft or document fraud"
          ],
          warning: true
        }
      ],
      note: "We take application fraud seriously. All information is subject to verification."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "5. Intellectual Property Rights",
      content: "All content, trademarks, and intellectual property on this website are protected:",
      items: [
        "Company name, logo, and branding are registered trademarks of Synnoviq Technologies",
        "All website content (text, graphics, code) is copyrighted",
        "Unauthorized reproduction or distribution is strictly prohibited",
        "User-submitted content (resumes, portfolios) remains your property",
        "By submitting materials, you grant us license to use them for recruitment purposes",
        "You warrant that submitted materials do not infringe third-party rights"
      ]
    }
  ];

  const additionalSections = [
    {
      title: "6. Employment and Internship Terms",
      content: "For successful applicants:",
      items: [
        "Employment terms will be specified in individual offer letters and contracts",
        "All employees/interns are subject to company policies and code of conduct",
        "Confidentiality and non-disclosure agreements apply during and after employment",
        "Non-compete clauses may apply as specified in employment contracts",
        "Performance evaluations conducted as per company policy"
      ]
    },
    {
      title: "7. Limitation of Liability",
      content: "Synnoviq Technologies shall not be liable for:",
      items: [
        "Indirect, incidental, or consequential damages",
        "Loss of profits, data, or business opportunities",
        "Damages arising from third-party content or services",
        "Service interruptions, technical errors, or bugs",
        "Decisions made based on information provided on the website",
        "Actions of third parties or external service providers"
      ],
      note: "Our maximum liability is limited to the amount of fees paid (if applicable) in the twelve months preceding the claim."
    },
    {
      title: "8. Account Termination",
      content: "We reserve the right to:",
      items: [
        "Suspend or terminate user accounts without prior notice",
        "Refuse service to anyone for any reason",
        "Remove or modify content that violates these terms",
        "Take appropriate legal action for violations",
        "Block access from specific IP addresses or regions"
      ],
      note: "Users may close their accounts at any time by contacting us."
    },
    {
      title: "9. Disclaimers",
      content: "Important disclaimers regarding our services:",
      items: [
        "Services are provided 'as is' without warranties of any kind",
        "We do not guarantee job placement or employment outcomes",
        "Information on the website may contain errors or inaccuracies",
        "We are not responsible for decisions made by external parties",
        "External links are provided for convenience only",
        "We do not endorse third-party products or services"
      ]
    },
    {
      title: "10. Dispute Resolution",
      content: "In case of disputes, the following process applies:",
      items: [
        "Initial attempt at resolution through good faith negotiation",
        "Mediation by a mutually agreed neutral third party (if needed)",
        "Binding arbitration in accordance with Indian Arbitration and Conciliation Act",
        "Arbitration venue: Chennai, Tamil Nadu, India",
        "Each party bears their own costs unless determined otherwise by arbitrator"
      ]
    },
    {
      title: "11. Governing Law and Jurisdiction",
      content: "These terms are governed by the laws of India. The courts of Chennai, Tamil Nadu shall have exclusive jurisdiction over any disputes arising from these terms or use of our services."
    },
    {
      title: "12. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Continued use of our services after changes constitutes acceptance of the modified terms. We will notify users of significant changes via:",
      items: [
        "Email notification to registered users",
        "Prominent notice on the website homepage",
        "Update to the 'Last Updated' date at the top of this page"
      ]
    },
    {
      title: "13. Severability",
      content: "If any provision of these terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect."
    },
    {
      title: "14. Entire Agreement",
      content: "These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Synnoviq Technologies regarding use of our services, superseding any prior agreements."
    },
    {
      title: "15. Contact Information",
      content: "For questions or concerns about these terms, please contact:",
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
              <Scale className="w-5 h-5" />
              <span className="font-semibold">Legal Terms</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl opacity-90">
              Last Updated: January 11, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-12">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-700">
                Please read these terms carefully before using our services. By accessing or using Synnoviq Technologies' services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
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

                  {section.subsections && (
                    <div className="space-y-4 mt-4">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx} className={subsection.warning ? "bg-red-50 p-4 rounded-lg border-l-4 border-red-500" : ""}>
                          <h3 className={`font-semibold mb-2 ${subsection.warning ? 'text-red-900' : 'text-gray-900'}`}>
                            {subsection.subtitle}
                          </h3>
                          <ul className="space-y-2 ml-4">
                            {subsection.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2">
                                <span className={subsection.warning ? 'text-red-600 mt-1.5' : 'text-purple-600 mt-1.5'}>•</span>
                                <span className={subsection.warning ? 'text-red-800' : 'text-gray-700'}>{item}</span>
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
          {additionalSections.map((section, index) => (
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
                <p className="text-sm text-gray-600 italic mt-2 p-3 bg-gray-50 rounded">
                  {section.note}
                </p>
              )}

              {section.contact && (
                <div className="mt-4 space-y-3 p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Email:</p>
                      <a href="mailto:legal@synnoviq.com" className="text-purple-600 hover:text-purple-700">
                        legal@synnoviq.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Address:</p>
                      <p className="text-gray-700">Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Agreement Acknowledgment */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            By Using Our Services
          </h3>
          <p className="text-lg opacity-90 mb-6">
            You acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* UPDATED: Changed from <a> to <Link> */}
            <Link
              to="/privacy"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              View Privacy Policy
            </Link>
            {/* UPDATED: Changed from <a> to <Link> and added scroll logic */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white px-8 py-3 rounded-full font-semibold border-2 border-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;