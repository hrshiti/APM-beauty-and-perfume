import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const RefundPolicy = () => {
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Refund Policy</h1>
          <p className="text-sm md:text-base text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white w-full p-4 md:p-6 lg:p-8 xl:p-12">
          <div className="prose prose-sm md:prose-base max-w-none">
            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">1. Refund Eligibility</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Refunds are processed for eligible returns as per our Return Policy. To be eligible for a refund, the product must meet all return conditions including being unopened, unused, and in its original packaging.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">2. Refund Processing Time</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Once we receive and inspect your returned product, we will process your refund within 5-7 business days. The refund will be credited to your original payment method. The time it takes for the refund to reflect in your account depends on your bank or payment provider:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                <li><strong>UPI:</strong> 2-3 business days</li>
                <li><strong>Net Banking:</strong> 5-7 business days</li>
                <li><strong>Cash on Delivery:</strong> Refund will be processed via bank transfer (5-7 business days)</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">3. Refund Amount</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                The refund amount will include:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Full product price</li>
                <li>Original shipping charges (if applicable and if the entire order is returned)</li>
              </ul>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-3">
                The following amounts will be deducted from your refund:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Return shipping charges (for orders below ₹999)</li>
                <li>Any discounts or promotional offers applied to the original order (if the return makes the order ineligible for the offer)</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">4. Partial Refunds</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                If you return only some items from an order, you will receive a partial refund for the returned items only. Shipping charges will not be refunded for partial returns unless the entire order is returned.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">5. Cancelled Orders</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                If you cancel your order before it is shipped, you will receive a full refund within 2-3 business days. If the order has already been shipped, you can return it as per our Return Policy, and the refund will be processed accordingly.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">6. Refund for Damaged or Defective Products</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                If you receive a damaged or defective product, you are entitled to a full refund including shipping charges. We will process the refund immediately upon verification of the damage or defect. Return shipping for damaged or defective products is always free.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">7. Refund Method</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Refunds will be processed to the original payment method used for the purchase:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>If you paid via credit/debit card, the refund will be credited to the same card</li>
                <li>If you paid via UPI, the refund will be credited to your UPI account</li>
                <li>If you paid via net banking, the refund will be credited to your bank account</li>
                <li>For Cash on Delivery orders, refunds will be processed via bank transfer to the account details you provide</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">8. Refund Status</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                You can track your refund status by:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Checking your account under "My Orders"</li>
                <li>Reviewing the refund confirmation email we send you</li>
                <li>Contacting our customer support team</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">9. Non-Refundable Items</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                The following are non-refundable:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Gift cards or vouchers</li>
                <li>Personalized or customized products</li>
                <li>Products that have been used or damaged by the customer</li>
                <li>Return shipping charges (for orders below ₹999)</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">10. Dispute Resolution</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                If you have any concerns about your refund, please contact our customer support team. We are committed to resolving any issues promptly and fairly. If you are not satisfied with the resolution, you can escalate the matter through our customer support channels.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">11. Contact Us</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                For any questions or assistance regarding refunds, please contact us:
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

export default RefundPolicy;

