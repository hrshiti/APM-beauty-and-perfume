import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const FAQs = () => {
  const navigate = useNavigate();
  const { closeCart } = useCartStore();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is the return and refund policy?",
      answer: "We offer a 7-day return and exchange policy. If you are not satisfied with your purchase, you can return the product within 7 days of delivery. The product must be unopened, unused, and in its original packaging. Refunds will be processed within 5-7 business days after we receive the returned product."
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping (available for select locations) takes 2-3 business days. You will receive a tracking number once your order is shipped. Shipping times may vary during festive seasons or sale periods."
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and cash on delivery (COD). For prepaid orders, we offer an additional 5% discount. All transactions are secure and encrypted."
    },
    {
      id: 4,
      question: "Are your products authentic and original?",
      answer: "Yes, all our products are 100% authentic and original. We source directly from authorized distributors and manufacturers. We guarantee the authenticity of every product sold on our platform."
    },
    {
      id: 5,
      question: "Do you offer free shipping?",
      answer: "Yes, we offer free shipping on orders above ₹999. For orders below ₹999, a nominal shipping charge of ₹50 applies. Free shipping is available for standard delivery only."
    },
    {
      id: 6,
      question: "Can I cancel my order?",
      answer: "Yes, you can cancel your order within 24 hours of placing it. If your order has already been shipped, you can return it using our return policy. To cancel, please contact our customer support or use the order cancellation option in your account."
    },
    {
      id: 7,
      question: "How do I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order by clicking on 'Track Order' in your account or by using the tracking link provided in the shipping confirmation email."
    },
    {
      id: 8,
      question: "What is your exchange policy?",
      answer: "We offer exchanges for products within 7 days of delivery. The product must be unopened and in its original condition. Exchanges are subject to product availability. If the desired product is not available, we will process a refund."
    },
    {
      id: 9,
      question: "Do you ship internationally?",
      answer: "Currently, we ship only within India. We are working on expanding our shipping services to international locations. Please check back with us for updates on international shipping."
    },
    {
      id: 10,
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via WhatsApp at +91-9810154380, email at shop@bellavitaorganic.com, or call us between 10:00 AM to 7:00 PM, Monday to Sunday. Our team is available to assist you with any queries or concerns."
    },
    {
      id: 11,
      question: "Are your products cruelty-free?",
      answer: "Yes, all our products are 100% cruelty-free. We are committed to ethical practices and do not test on animals. Our formulations are certified and contain only certified ingredients."
    },
    {
      id: 12,
      question: "What if I receive a damaged product?",
      answer: "If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos of the damaged product. We will arrange for a replacement or full refund at no additional cost to you."
    },
    {
      id: 13,
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer gift wrapping services for select products. You can add gift wrapping during checkout. Gift-wrapped orders come with a personalized message option."
    },
    {
      id: 14,
      question: "What is the shelf life of your perfumes?",
      answer: "Our perfumes have a shelf life of 3-5 years from the date of manufacture when stored properly. Keep them away from direct sunlight and extreme temperatures. The manufacturing date is printed on the packaging."
    },
    {
      id: 15,
      question: "Can I modify my order after placing it?",
      answer: "You can modify your order within 2 hours of placing it, provided it hasn't been processed for shipping. To modify your order, please contact our customer support team immediately with your order number."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      
      <div className="container mx-auto px-3 md:px-4 py-4 md:py-6 max-w-4xl">
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h1>
          <p className="text-sm md:text-base text-gray-600">Find answers to common questions about our products and services</p>
        </div>

        {/* FAQs List */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm md:text-base font-semibold text-gray-800 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-8 md:mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 text-center">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Still have questions?</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">Our customer support team is here to help you</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919810154380"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.127-8.088z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+919810154380"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-purple-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;

