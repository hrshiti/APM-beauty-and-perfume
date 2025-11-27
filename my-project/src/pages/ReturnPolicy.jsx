import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const ReturnPolicy = () => {
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Return Policy</h1>
          <p className="text-sm md:text-base text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white w-full p-4 md:p-6 lg:p-8 xl:p-12">
          <div className="prose prose-sm md:prose-base max-w-none">
            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">1. Return Eligibility</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We offer a 7-day return policy from the date of delivery. To be eligible for a return, the following conditions must be met:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>The product must be unopened, unused, and in its original condition</li>
                <li>The product must be in its original packaging with all tags, labels, and accessories intact</li>
                <li>The return request must be initiated within 7 days of delivery</li>
                <li>You must have a valid proof of purchase (order number or invoice)</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">2. Non-Returnable Items</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                The following items cannot be returned:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Products that have been opened, used, or damaged by the customer</li>
                <li>Products without original packaging or missing accessories</li>
                <li>Personalized or customized products</li>
                <li>Gift cards or vouchers</li>
                <li>Products purchased during special sales or promotional events (unless specified otherwise)</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">3. How to Initiate a Return</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                To initiate a return, please follow these steps:
              </p>
              <ol className="list-decimal list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Log in to your account and go to "My Orders"</li>
                <li>Select the order you wish to return</li>
                <li>Click on "Return" and provide the reason for return</li>
                <li>Our team will review your request and send you a return authorization</li>
                <li>Pack the product securely in its original packaging</li>
                <li>Ship the product back to us using the provided return label or courier service</li>
              </ol>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-3">
                Alternatively, you can contact our customer support team at +91-9810154380 or email us at shop@bellavitaorganic.com to initiate a return.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">4. Return Shipping</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                <strong>Free Returns:</strong> We offer free return shipping for orders above ₹999. For orders below ₹999, return shipping charges of ₹50 will be deducted from your refund amount.
              </p>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                <strong>Return Address:</strong> Please send returns to our warehouse address. The return address will be provided in the return authorization email.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">5. Return Processing Time</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Once we receive your returned product, our team will inspect it within 2-3 business days. If the return is approved, we will process your refund or exchange within 5-7 business days. You will receive a confirmation email once the return is processed.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">6. Exchanges</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We offer exchanges for products within 7 days of delivery, subject to product availability. If the desired product is not available, we will process a refund instead. Exchanges are only available for products of equal or higher value.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">7. Damaged or Defective Products</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos of the damaged product. We will arrange for a replacement or full refund at no additional cost to you. Return shipping for damaged or defective products is always free.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">8. Wrong Product Delivered</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                If you receive a wrong product, please contact us immediately. We will arrange for the correct product to be shipped to you at no additional cost, and we will cover the return shipping for the incorrect product.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">9. Contact Us</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                For any questions or assistance regarding returns, please contact us:
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

export default ReturnPolicy;

