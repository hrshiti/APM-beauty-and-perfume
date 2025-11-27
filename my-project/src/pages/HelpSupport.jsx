import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const HelpSupport = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I track my order?',
      answer: 'You can track your order by going to My Orders section and clicking on your order. You will find the tracking number there.'
    },
    {
      id: 2,
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy. Products must be unused and in original packaging.'
    },
    {
      id: 3,
      question: 'How can I cancel my order?',
      answer: 'You can cancel your order from the Order Details page if it hasn\'t been shipped yet.'
    },
    {
      id: 4,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, UPI, and cash on delivery.'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex flex-col pt-16">
        <div className="flex-1 container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-3xl overflow-x-hidden">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/account"
              className="text-purple-600 hover:text-purple-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Help & Support</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4">
            <h2 className="text-lg md:text-xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">support@vintagebeauty.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 last:border-0">
                  <button
                    onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between py-3 text-left"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform ${activeFaq === faq.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFaq === faq.id && (
                    <div className="pb-3 text-gray-600 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HelpSupport;

