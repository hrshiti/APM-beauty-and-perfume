import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import BottomNavbar from './BottomNavbar';
import logo from '../assets/logo vintage.png';
// Import product images
import img1 from '../assets/images vintage/1.jpg';
import img2 from '../assets/images vintage/2.jpg';
import img3 from '../assets/images vintage/3.jpg';
import img4 from '../assets/images vintage/4.jpg';
import img5 from '../assets/images vintage/5.jpg';
import img6 from '../assets/images vintage/6.jpg';
import img7 from '../assets/images vintage/7.jpg';
import img8 from '../assets/images vintage/8-222.jpg';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCartStore();
  
  const orderData = location.state || {
    orderItems: [],
    totalPrice: 0,
    shipping: 0,
    discount: 0,
    finalTotal: 0,
    itemCount: 0,
    couponCode: null,
    deliveryAddress: null
  };

  const { orderItems, totalPrice, shipping, discount, finalTotal, itemCount, couponCode, deliveryAddress } = orderData;

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const productImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  const getProductImage = (productId) => {
    const index = parseInt(productId) || 0;
    return productImages[index % productImages.length] || img1;
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/order-success', {
        state: {
          orderId: `ORD-${Date.now()}`,
          orderItems,
          totalPrice,
          shipping,
          discount,
          finalTotal,
          paymentMethod,
          couponCode,
          deliveryAddress
        }
      });
    }, 2000);
  };

  if (orderItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
        <nav className="w-full bg-black border-b border-gray-800 sticky top-0 z-40">
          <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/cart')}
                className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-base md:text-xl lg:text-2xl font-semibold uppercase tracking-wider text-white">
                Payment
              </h1>
              <div className="w-10"></div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-2xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">No order found</h2>
            <button
              onClick={() => navigate('/products')}
              className="bg-[#D4AF37] hover:bg-[#F4D03F] text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 shadow-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>

        <BottomNavbar />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
      {/* Header */}
      <nav className="w-full bg-black border-b border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/order-summary')}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2 md:gap-3">
              {logo && (
                <img 
                  src={logo} 
                  alt="Vintage Beauty Logo" 
                  className="h-6 md:h-8 w-auto"
                />
              )}
              <h1 className="text-base md:text-xl lg:text-2xl font-semibold uppercase tracking-wider text-white">
                Payment
              </h1>
            </div>

            <div className="w-10"></div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Payment Methods & Form */}
          <div className="md:col-span-2 space-y-6">
            {/* Order Items Summary */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                Order Items ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </h3>
              <div className="space-y-3">
                {orderItems.map((item, index) => {
                  const itemPrice = item.selectedPrice || item.price || 699;
                  const itemTotal = itemPrice * item.quantity;
                  const productImage = getProductImage(item.id);

                  return (
                    <div key={index} className="flex items-center gap-3 pb-3 border-b border-gray-800 last:border-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                        <img
                          src={item.image || productImage}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm md:text-base font-semibold text-white truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-400">
                          {item.size} × {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm md:text-base font-bold text-[#D4AF37]">
                        ₹{itemTotal.toLocaleString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                Select Payment Method
              </h3>

              <div className="space-y-3">
                {/* Card Payment */}
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                    paymentMethod === 'card'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'card' ? 'border-[#D4AF37]' : 'border-gray-600'
                    }`}>
                      {paymentMethod === 'card' && (
                        <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                      )}
                    </div>
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="text-white font-semibold">Credit/Debit Card</span>
                  </div>
                </button>

                {/* UPI Payment */}
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                    paymentMethod === 'upi'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'upi' ? 'border-[#D4AF37]' : 'border-gray-600'
                    }`}>
                      {paymentMethod === 'upi' && (
                        <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                      )}
                    </div>
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white font-semibold">UPI</span>
                  </div>
                </button>

                {/* Cash on Delivery */}
                <button
                  onClick={() => setPaymentMethod('cod')}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                    paymentMethod === 'cod'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'cod' ? 'border-[#D4AF37]' : 'border-gray-600'
                    }`}>
                      {paymentMethod === 'cod' && (
                        <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                      )}
                    </div>
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-white font-semibold">Cash on Delivery</span>
                  </div>
                </button>
              </div>

              {/* Payment Form */}
              {paymentMethod === 'card' && (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm md:text-base text-gray-400 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardDetails.cardNumber}
                      onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      maxLength={19}
                    />
                  </div>

                  <div>
                    <label className="block text-sm md:text-base text-gray-400 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={cardDetails.cardName}
                      onChange={(e) => setCardDetails({...cardDetails, cardName: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm md:text-base text-gray-400 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiryDate}
                        onChange={(e) => setCardDetails({...cardDetails, expiryDate: e.target.value})}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        maxLength={5}
                      />
                    </div>

                    <div>
                      <label className="block text-sm md:text-base text-gray-400 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        maxLength={3}
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="mt-6">
                  <label className="block text-sm md:text-base text-gray-400 mb-2">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="mt-6 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4">
                  <p className="text-sm md:text-base text-[#D4AF37]">
                    💰 Pay cash when your order is delivered
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-800 shadow-xl">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-800">
                  Order Summary
                </h3>

                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white font-semibold">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-white font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-400">Free</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>

                  <div className="pt-3 md:pt-4 border-t border-gray-800">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg font-bold text-white">Total</span>
                      <span className="text-xl md:text-2xl font-bold text-[#D4AF37]">
                        ₹{finalTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <button
                  onClick={handlePayment}
                  disabled={isProcessing || (paymentMethod === 'card' && (!cardDetails.cardNumber || !cardDetails.cardName || !cardDetails.expiryDate || !cardDetails.cvv)) || (paymentMethod === 'upi' && !upiId)}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-[#F4D03F] hover:to-amber-400 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Pay ₹{finalTotal.toLocaleString()}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Payment;

