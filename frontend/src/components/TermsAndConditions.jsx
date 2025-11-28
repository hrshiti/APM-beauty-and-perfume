import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo vintage.png';

const TermsAndConditions = () => {
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
            Terms & Conditions
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
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the Vintage Beauty website operated by APM Beauty & Perfumery (IDAM Natural Wellness Pvt. Ltd.), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">2. Use of Website</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Use the website in any way that could damage, disable, or impair the website</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Collect or harvest any information from the website without authorization</li>
                <li>Use automated systems to access the website without permission</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">3. Product Information</h3>
              <p className="text-gray-300 leading-relaxed">
                We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content on the website is accurate, complete, reliable, current, or error-free. Product images are for illustrative purposes only and may not reflect the exact appearance of the product. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">4. Pricing and Payment</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                All prices are listed in Indian Rupees (₹) and are subject to change without notice. We reserve the right to modify prices at any time. Payment must be made at the time of order placement. We accept:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Credit and debit cards</li>
                <li>UPI payments</li>
                <li>Net banking</li>
                <li>Cash on Delivery (COD) for eligible orders</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                All prepaid orders are eligible for a flat 5% discount. Prices do not include shipping charges unless otherwise stated.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">5. Orders and Acceptance</h3>
              <p className="text-gray-300 leading-relaxed">
                When you place an order, you are making an offer to purchase products at the prices stated. We reserve the right to accept or reject any order for any reason. If we accept your order, you will receive an order confirmation email. The contract for the sale of products is formed when we dispatch the products to you.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">6. Shipping and Delivery</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                We ship to addresses within India. Shipping charges and delivery times vary based on your location. We are not responsible for delays caused by shipping carriers or customs. Risk of loss and title for products pass to you upon delivery to the carrier.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Free shipping is available on orders above ₹999. For orders below this amount, shipping charges apply as displayed at checkout.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">7. Returns and Refunds</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                We offer a 7-day return policy for unopened and unused products in their original packaging. To be eligible for a return:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>The product must be unused and in its original packaging</li>
                <li>You must contact us within 7 days of delivery</li>
                <li>The product must be returned with all original tags and accessories</li>
                <li>Return shipping costs are the responsibility of the customer unless the product is defective or incorrect</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                Refunds will be processed within 5-7 business days after we receive and inspect the returned product. Refunds will be issued to the original payment method.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">8. Intellectual Property</h3>
              <p className="text-gray-300 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of APM Beauty & Perfumery or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">9. Limitation of Liability</h3>
              <p className="text-gray-300 leading-relaxed">
                To the fullest extent permitted by law, APM Beauty & Perfumery shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the website or products.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">10. Indemnification</h3>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify, defend, and hold harmless APM Beauty & Perfumery, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of the website, violation of these Terms, or infringement of any rights of another.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">11. Governing Law</h3>
              <p className="text-gray-300 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">12. Changes to Terms</h3>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after changes are posted constitutes your acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">13. Contact Information</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                <p className="text-gray-300"><strong className="text-white">Company:</strong> APM Beauty & Perfumery (IDAM Natural Wellness Pvt. Ltd.)</p>
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

export default TermsAndConditions;

