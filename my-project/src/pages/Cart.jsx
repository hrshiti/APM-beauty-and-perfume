import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import CartItem from '../components/cart/CartItem';
import CouponInput from '../components/cart/CouponInput';
import Footer from '../components/common/Footer';

const Cart = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, getDiscount, getShipping, getTotal, clearCart } = useCartStore();

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const shipping = getShipping();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex flex-col">
        <div className="container mx-auto px-2 md:px-4 py-2 md:py-6">
          {/* Back Button */}
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors p-1 md:p-2 -ml-1 md:ml-0"
              aria-label="Go back"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-sm md:text-base font-medium">Back</span>
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <svg className="w-16 h-16 md:w-24 md:h-24 mx-auto text-gray-300 mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Start shopping to add items to your cart</p>
            <Link
              to="/shop-all"
              className="inline-block px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm md:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex flex-col">
      <div className="flex-1 container mx-auto px-2 md:px-4 py-2 md:py-6 max-w-full overflow-x-hidden">
        {/* Back Button */}
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors p-1 md:p-2 -ml-1 md:ml-0"
            aria-label="Go back"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-sm md:text-base font-medium">Back</span>
          </button>
        </div>
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 pb-32 md:pb-0">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 lg:p-6">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              
              <div className="mt-2 md:mt-4 pt-2 md:pt-4 border-t flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
                <Link
                  to="/shop-all"
                  className="text-purple-600 hover:text-purple-700 font-medium text-xs md:text-base"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear your cart?')) {
                      clearCart();
                    }
                  }}
                  className="text-red-600 hover:text-red-700 font-medium text-xs md:text-base"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 mt-3 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm p-3 md:p-6 sticky top-20 pb-32 md:pb-6">
              <h2 className="text-base md:text-xl font-bold text-gray-800 mb-2 md:mb-4">Order Summary</h2>
              
              {/* Coupon Input */}
              <div className="mb-3 md:mb-4">
                <CouponInput onClose={() => {}} />
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 md:space-y-3 mb-2 md:mb-4">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-semibold text-green-600">-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                {subtotal < 999 && (
                  <p className="text-[10px] md:text-xs text-gray-500">
                    Add ₹{(999 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="flex justify-between font-bold text-base md:text-lg border-t border-gray-300 pt-2 md:pt-3">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-black text-white py-2 md:py-3 rounded-lg font-semibold text-xs md:text-base hover:bg-gray-800 transition-colors mb-2 md:mb-3"
              >
                PROCEED TO CHECKOUT
              </button>

              <Link
                to="/crazy-deals"
                className="block text-center text-[10px] md:text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                View Deals & Offers
              </Link>
            </div>
          </div>
        </div>
        
        {/* Extra scroll space for mobile */}
        <div className="h-24 md:h-0"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

