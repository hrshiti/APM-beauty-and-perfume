import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const { closeCart } = useCartStore();

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      
      <div className="w-full px-3 md:px-6 lg:px-8 xl:px-12 py-4 md:py-6">
        {/* Back Button */}
        <div className="mb-4 md:mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors p-1 md:p-2"
            aria-label="Go back"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-sm md:text-base font-medium">Back</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
          <p className="text-sm md:text-base text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white w-full p-4 md:p-6 lg:p-8 xl:p-12">
          <div className="prose prose-sm md:prose-base max-w-none">
            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">1. Introduction</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Bella Vita Luxury ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website bellavitaluxury.co.in and use our services.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">2. Information We Collect</h2>
              <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2 mt-4">2.1 Personal Information</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Name, email address, phone number, and postal address</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Account credentials and preferences</li>
                <li>Order history and purchase information</li>
                <li>Communication preferences and feedback</li>
              </ul>

              <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2 mt-4">2.2 Automatically Collected Information</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">3. How We Use Your Information</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Processing and fulfilling your orders</li>
                <li>Communicating with you about your orders, products, and services</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending promotional emails, newsletters, and marketing communications (with your consent)</li>
                <li>Improving our website, products, and services</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
                <li>Personalizing your shopping experience</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, shipping, and data analysis.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">5. Data Security</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">7. Your Rights and Choices</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                You have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> You can request deletion of your personal information, subject to certain exceptions.</li>
                <li><strong>Opt-out:</strong> You can opt-out of receiving marketing communications from us.</li>
                <li><strong>Data Portability:</strong> You can request a copy of your data in a structured format.</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">8. Children's Privacy</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">9. Third-Party Links</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">10. Data Retention</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">12. Contact Us</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-xs md:text-sm text-gray-600 space-y-1">
                <p><strong>Email:</strong> shop@bellavitaorganic.com</p>
                <p><strong>Phone:</strong> +91-9810154380</p>
                <p><strong>Address:</strong> Plot no. 417, Udyog Vihar Phase III, Gurgaon, Haryana, India</p>
                <p><strong>Timing:</strong> 10:00 AM to 7:00 PM, Monday to Sunday</p>
              </div>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">13. Scam Alert</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We have noticed a rise in fraudulent activities through calls, SMS, WhatsApp messages, emails, and other mediums. Please be aware that:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Bella Vita Luxury and its employees never ask for your financial details for contests or deals outside our official platform.</li>
                <li>We never request payments for any promotional activities through unauthorized channels.</li>
                <li>If you receive any such communication, stay cautious and reach out to us immediately at our customer care number +91-9810154380 or email us at shop@bellavitaorganic.com.</li>
                <li>If you suspect any scam, kindly report it to the Department of Telecommunications (DoT).</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

