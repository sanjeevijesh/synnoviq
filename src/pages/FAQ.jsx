import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added Import
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  // ... (Keep your existing faqData and filter logic exactly as is) ...
  const faqData = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What does Synnoviq Technologies do?",
          answer: "We are a technology company focused on building innovative software solutions and nurturing the next generation of tech talent through internships and job opportunities."
        },
        {
          question: "Where is Synnoviq Technologies located?",
          answer: "We are based in Chennai, Tamil Nadu, India, with remote work options available."
        },
        {
          question: "Do you offer remote positions?",
          answer: "Yes, we offer hybrid and remote positions depending on the role and team requirements."
        }
      ]
    },
    {
      category: "Application & Hiring",
      questions: [
        {
          question: "How long does the hiring process take?",
          answer: "Typically 3-4 weeks from application to offer letter: Week 1 - Application review, Week 2 - Initial screening, Week 3 - Technical interviews, Week 4 - Final decision and offer."
        },
        {
          question: "What qualifications do I need?",
          answer: "We accept students and graduates from B.Tech, B.E., BCA, MCA, M.Tech programs. Strong technical skills and passion for learning are essential."
        },
        {
          question: "Can I apply for multiple positions?",
          answer: "Yes, you can apply for multiple positions, but we recommend focusing on roles that best match your skills and interests."
        },
        {
          question: "Do you hire freshers?",
          answer: "Absolutely! We actively hire fresh graduates and provide comprehensive training."
        },
        {
          question: "What's the difference between internship and full-time positions?",
          answer: "Internships are typically 3-6 months with a stipend and learning focus. Full-time positions offer permanent employment with competitive salary and benefits."
        }
      ]
    },
    {
      category: "Internship Specific",
      questions: [
        {
          question: "Are internships paid?",
          answer: "Yes, all our internships come with a competitive stipend."
        },
        {
          question: "Can interns get hired full-time?",
          answer: "Yes! Many of our full-time employees started as interns. Outstanding performance can lead to a full-time offer."
        },
        {
          question: "Do you provide certificates?",
          answer: "Yes, all interns receive a certificate of completion upon successfully finishing their internship."
        },
        {
          question: "What will I learn during the internship?",
          answer: "You'll work on real projects, learn industry-standard tools, receive mentorship, and develop both technical and soft skills."
        }
      ]
    },
    {
      category: "Entrepreneur Program",
      questions: [
        {
          question: "What is the Entrepreneur Program?",
          answer: "Our program supports aspiring entrepreneurs with mentorship, funding opportunities, technical resources, and business guidance."
        },
        {
          question: "Do I need a complete business plan to apply?",
          answer: "No, you need a clear business idea and vision. We'll help you develop the full business plan."
        },
        {
          question: "What kind of support do you provide?",
          answer: "We provide mentorship, funding/investment opportunities, technical development support, co-working space, and go-to-market strategy help."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "What technologies do you work with?",
          answer: "We work with modern tech stacks including React, Node.js, Python, Java, AWS, Docker, and more depending on the project."
        },
        {
          question: "Do you provide training?",
          answer: "Yes, we offer continuous learning opportunities, workshops, and access to online courses."
        },
        {
          question: "What's the work culture like?",
          answer: "We maintain a collaborative, innovative, and inclusive work environment that values creativity and growth."
        }
      ]
    },
    
  ];

  // Filter FAQs based on search
  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5" />
            <span className="font-semibold">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Find answers to common questions about Synnoviq Technologies, our hiring process, and opportunities.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 max-w-4xl -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No results found for "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-purple-600 hover:text-purple-700 font-semibold"
            >
              Clear search
            </button>
          </div>
        ) : (
          filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-purple-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="w-6 h-6 text-purple-600" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Still Need Help Section */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* UPDATED: Changed from <a> to <Link> */}
            <Link
              to="/support"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Contact Support
            </Link>
            {/* UPDATED: Changed from <a> to <Link> and added scroll logic */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-4 rounded-full font-semibold border-2 border-purple-600 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;