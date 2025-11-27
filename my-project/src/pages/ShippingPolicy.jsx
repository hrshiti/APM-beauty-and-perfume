import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const ShippingPolicy = () => {
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Shipping Policy</h1>
          <p className="text-sm md:text-base text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white w-full p-4 md:p-6 lg:p-8 xl:p-12">
          <div className="prose prose-sm md:prose-base max-w-none">
            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">1. Shipping Information</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We ship products across India. All orders are processed and shipped from our warehouse located in Gurgaon, Haryana. We strive to dispatch all orders within 1-2 business days of order confirmation.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">2. Shipping Charges</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                <strong>Free Shipping:</strong> We offer free shipping on all orders above ₹999. For orders below ₹999, a nominal shipping charge of ₹50 applies.
              </p>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                <strong>Express Shipping:</strong> Express shipping is available for select locations at an additional charge. Delivery time for express shipping is 2-3 business days.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">3. Delivery Time</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                <strong>Standard Delivery:</strong> 5-7 business days from the date of dispatch. Delivery times may vary based on your location and during festive seasons or sale periods.
              </p>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                <strong>Metro Cities:</strong> 3-5 business days
              </p>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                <strong>Tier 2 & 3 Cities:</strong> 5-7 business days
              </p>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                <strong>Remote Areas:</strong> 7-10 business days
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">4. Order Tracking</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order status by:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-2 ml-4">
                <li>Clicking on "Track Order" in your account</li>
                <li>Using the tracking link provided in the shipping confirmation email</li>
                <li>Contacting our customer support team</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">5. Shipping Partners</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                We partner with trusted courier services including Blue Dart, Delhivery, and India Post to ensure safe and timely delivery of your orders. The shipping partner may vary based on your location.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">6. Delivery Address</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Please ensure that your delivery address is complete and accurate. We are not responsible for delays or non-delivery caused by incorrect or incomplete addresses. If an order is returned due to an incorrect address, re-shipping charges will apply.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">7. Delivery Attempts</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Our courier partners will make up to 3 delivery attempts. If the delivery is unsuccessful after 3 attempts, the order will be returned to us. You can contact us to arrange for re-delivery, which may incur additional shipping charges.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">8. International Shipping</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Currently, we only ship within India. We are working on expanding our shipping services to international locations. Please check back with us for updates on international shipping.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">9. Delayed Shipments</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                While we strive to deliver orders within the estimated time, delays may occur due to unforeseen circumstances such as natural disasters, weather conditions, or courier service issues. We will keep you informed of any significant delays and work to resolve them promptly.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">10. Contact Us</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                If you have any questions about shipping or need assistance with your order, please contact us:
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

export default ShippingPolicy;

