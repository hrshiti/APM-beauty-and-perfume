import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo vintage.png';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pb-20 md:pb-0">
      {/* Navigation Bar */}
      <nav className="w-full bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
              aria-label="Back"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Logo/Brand Name */}
            <div className="flex items-center gap-2 md:gap-3">
              {logo && (
                <img 
                  src={logo} 
                  alt="VINTAGE BEAUTY Logo" 
                  className="h-6 md:h-8 w-auto"
                />
              )}
              <h1 className="text-base md:text-xl lg:text-2xl font-semibold uppercase tracking-wider text-white">
                VINTAGE BEAUTY
              </h1>
            </div>

            {/* Shopping Bag Icon */}
            <button
              onClick={() => navigate('/cart')}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors relative"
              aria-label="Shopping Cart"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="w-full bg-black border-b border-gray-800 py-6 md:py-8">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Privacy Policy
          </h2>
          <p className="text-center text-gray-400 mt-2">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="w-full bg-black py-8 md:py-12">
        <div className="w-full">
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-800 space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">1. Introduction</h3>
              <p className="text-gray-300 leading-relaxed">
                APM Beauty & Perfumery ("we," "our," or "us") operates the Vintage Beauty website and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and make purchases.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">2. Information We Collect</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Personal information (name, email address, phone number, shipping address)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Account credentials (username, password)</li>
                <li>Order history and preferences</li>
                <li>Communication records (customer service interactions)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                We also automatically collect certain information when you visit our website, such as IP address, browser type, device information, and browsing patterns.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">3. How We Use Your Information</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and shipping updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you promotional offers and marketing communications (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Detect and prevent fraud and security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Service providers who assist us in operating our website and conducting business</li>
                <li>Payment processors to handle transactions</li>
                <li>Shipping companies to deliver your orders</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">5. Data Security</h3>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">6. Your Rights</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h3>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">8. Third-Party Links</h3>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">9. Children's Privacy</h3>
              <p className="text-gray-300 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h3>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">11. Contact Us</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                <p className="text-gray-300"><strong className="text-white">Email:</strong> info@vintagebeauty.co</p>
                <p className="text-gray-300"><strong className="text-white">Phone:</strong> 8882815969</p>
                <p className="text-gray-300"><strong className="text-white">WhatsApp:</strong> 9971598882</p>
                <p className="text-gray-300"><strong className="text-white">Address:</strong> Ground Floor Zaidi Apartment-3, Sector-73, Noida- 201307</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

