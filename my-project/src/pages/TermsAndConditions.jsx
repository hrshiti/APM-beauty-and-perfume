import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const TermsAndConditions = () => {
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Terms and Conditions</h1>
          <p className="text-sm md:text-base text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white w-full p-4 md:p-6 lg:p-8 xl:p-12">
          <div className="prose prose-sm md:prose-base max-w-none">
            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">1. Acceptance of Terms</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                By accessing and using this website (bellavitaluxury.co.in), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">2. Use License</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Permission is granted to temporarily download one copy of the materials on Bella Vita Luxury's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">3. Product Information</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content on this site is accurate, complete, reliable, current, or error-free. If a product offered by us is not as described, your sole remedy is to return it in unused condition.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">4. Pricing and Payment</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                All prices are in Indian Rupees (₹) and are subject to change without notice. We reserve the right to modify prices at any time. Payment must be made at the time of purchase. We accept various payment methods including credit cards, debit cards, UPI, net banking, and cash on delivery.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">5. Shipping and Delivery</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We ship products within India. Shipping charges and delivery times vary based on your location. Free shipping is available on orders above ₹999. We are not responsible for delays caused by shipping carriers or customs. Risk of loss and title for products purchased pass to you upon delivery to the carrier.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">6. Returns and Refunds</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We offer a 7-day return policy for unopened and unused products in their original packaging. To be eligible for a return, the item must be unused and in the same condition that you received it. Refunds will be processed within 5-7 business days after we receive and inspect the returned product.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">7. User Accounts</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">8. Intellectual Property</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                The website and its original content, features, and functionality are owned by Bella Vita Luxury and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any material found on this website.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">9. Limitation of Liability</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                In no event shall Bella Vita Luxury, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website or products.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">10. Governing Law</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                These Terms shall be interpreted and governed by the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Gurgaon, Haryana, India.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">11. Changes to Terms</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">12. Contact Information</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="text-xs md:text-sm text-gray-600 space-y-1">
                <p><strong>Email:</strong> shop@bellavitaorganic.com</p>
                <p><strong>Phone:</strong> +91-9810154380</p>
                <p><strong>Address:</strong> Plot no. 417, Udyog Vihar Phase III, Gurgaon, Haryana, India</p>
                <p><strong>Timing:</strong> 10:00 AM to 7:00 PM, Monday to Sunday</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;

