import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import BottomNavbar from './BottomNavbar';
import logo from '../assets/logo vintage.png';
// Import product images from assets folder
import img1 from '../assets/IMG_2698.JPG';
import img2 from '../assets/IMG_2700.JPG';
import img3 from '../assets/IMG_2702.JPG';
import img4 from '../assets/IMG_2703.JPG';
import img5 from '../assets/IMG_2705.JPG';
import img6 from '../assets/IMG_2707.JPG';
import img7 from '../assets/IMG_2709.JPG';
import img8 from '../assets/IMG_2711.JPG';
import img9 from '../assets/IMG_2719.JPG';
import img10 from '../assets/IMG_2721.JPG';
import img11 from '../assets/IMG_2723.JPG';
import img12 from '../assets/IMG_2725.JPG';
import img13 from '../assets/IMG_2727.JPG';
import img14 from '../assets/IMG_2728.JPG';
import img15 from '../assets/IMG_2732.JPG';

const OrderSummary = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, getItemCount, clearCart } = useCartStore();
  
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: 'Hriti Singh',
    phone: '+91 9876543210',
    address: '123, Main Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
  });
  
  const productImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  
  // Available coupon codes
  const availableCoupons = {
    'WELCOME10': { discount: 10, type: 'percent', minAmount: 500 },
    'SAVE20': { discount: 20, type: 'percent', minAmount: 1000 },
    'FLAT50': { discount: 50, type: 'flat', minAmount: 300 },
    'VINTAGE15': { discount: 15, type: 'percent', minAmount: 700 },
  };
  
  const totalPrice = getTotalPrice();
  const itemCount = getItemCount();
  const shipping = totalPrice > 500 ? 0 : 50;
  
  // Calculate discount
  let discount = 0;
  if (appliedCoupon) {
    const coupon = availableCoupons[appliedCoupon];
    if (coupon.type === 'percent') {
      discount = Math.round((totalPrice * coupon.discount) / 100);
    } else {
      discount = coupon.discount;
    }
  }
  
  const finalTotal = Math.max(0, totalPrice + shipping - discount);

  const getProductImage = (productId) => {
    const index = parseInt(productId) || 0;
    return productImages[index % productImages.length] || img1;
  };

  // Helper function to get safe image - handles old string paths
  const getSafeImage = (itemImage, productImage) => {
    if (typeof itemImage === 'string') {
      if (itemImage.includes('images vintage') || itemImage.includes('images%20vintage')) {
        return productImage;
      }
      if (itemImage.startsWith('http') || itemImage.startsWith('/') || itemImage.startsWith('../')) {
        return itemImage;
      }
    }
    if (itemImage && typeof itemImage === 'object') {
      return itemImage;
    }
    return productImage;
  };

  const handleApplyCoupon = () => {
    setCouponError('');
    const code = couponCode.toUpperCase().trim();
    
    if (!code) {
      setCouponError('Please enter a coupon code');
      return;
    }
    
    if (availableCoupons[code]) {
      const coupon = availableCoupons[code];
      if (totalPrice >= coupon.minAmount) {
        setAppliedCoupon(code);
        setCouponError('');
      } else {
        setCouponError(`Minimum order of ₹${coupon.minAmount} required for this coupon`);
      }
    } else {
      setCouponError('Invalid coupon code');
    }
  };
  
  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };
  
  const handlePayment = () => {
    navigate('/payment', { 
      state: { 
        orderItems: items.map(item => ({
          ...item,
          image: getSafeImage(item.image, getProductImage(item.id))
        })),
        totalPrice,
        shipping,
        discount,
        finalTotal,
        itemCount,
        couponCode: appliedCoupon,
        deliveryAddress
      } 
    });
  };
  
  // Calculate estimated delivery date (3-5 days from today)
  const getEstimatedDelivery = () => {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + Math.floor(Math.random() * 3) + 3);
    return deliveryDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  if (items.length === 0) {
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
                Order Summary
              </h1>
              <div className="w-10"></div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-2xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">No items in cart</h2>
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
              onClick={() => navigate('/cart')}
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
                Order Summary
              </h1>
            </div>

            <div className="w-10"></div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 max-w-5xl">
        {/* Order Items Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
            Order Items ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </h2>

          <div className="space-y-3 md:space-y-4">
            {items.map((item, index) => {
              const itemPrice = item.selectedPrice || item.price || 699;
              const itemTotal = itemPrice * item.quantity;
              const productImage = getProductImage(item.id);

              return (
                <div
                  key={`${item.id}-${item.size}-${index}`}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-lg"
                >
                  <div className="flex gap-4 md:gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                        <img
                          src={getSafeImage(item.image, productImage)}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-white mb-1">
                            {item.name}
                          </h3>
                          {item.size && (
                            <p className="text-sm md:text-base text-gray-400 mb-2">
                              Size: <span className="text-[#D4AF37]">{item.size}</span>
                            </p>
                          )}
                          <p className="text-sm md:text-base text-gray-400 mb-2">
                            Quantity: <span className="text-white font-semibold">{item.quantity}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <p className="text-sm text-gray-400">Unit Price</p>
                        <p className="text-base md:text-lg font-bold text-[#D4AF37]">
                          ₹{itemPrice.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                        <p className="text-base md:text-lg font-bold text-white">Item Total</p>
                        <p className="text-xl md:text-2xl font-bold text-[#D4AF37]">
                          ₹{itemTotal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Address Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-800 shadow-xl mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Delivery Address
            </h3>
            <button className="text-[#D4AF37] hover:text-amber-500 text-sm font-medium transition-colors">
              Change
            </button>
          </div>
          
          <div className="space-y-2 text-sm md:text-base">
            <p className="text-white font-semibold">{deliveryAddress.name}</p>
            <p className="text-gray-400">{deliveryAddress.phone}</p>
            <p className="text-gray-300">{deliveryAddress.address}</p>
            <p className="text-gray-300">{deliveryAddress.city}, {deliveryAddress.state} - {deliveryAddress.pincode}</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs md:text-sm text-gray-400">
              <span className="text-[#D4AF37]">📦 Estimated Delivery:</span> {getEstimatedDelivery()}
            </p>
          </div>
        </div>

        {/* Coupon Code Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-800 shadow-xl mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-800 flex items-center gap-2">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Apply Coupon
          </h3>
          
          {appliedCoupon ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 md:p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-green-400 font-semibold">Coupon Applied: {appliedCoupon}</p>
                    <p className="text-xs text-gray-400">
                      {availableCoupons[appliedCoupon].type === 'percent' 
                        ? `${availableCoupons[appliedCoupon].discount}% OFF`
                        : `₹${availableCoupons[appliedCoupon].discount} OFF`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveCoupon}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                onKeyPress={(e) => e.key === 'Enter' && handleApplyCoupon()}
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-[#D4AF37] hover:bg-amber-500 text-black font-bold px-4 md:px-6 py-2.5 md:py-3 rounded-lg transition-all duration-300"
              >
                Apply
              </button>
            </div>
          )}
          
          {couponError && (
            <p className="text-red-400 text-sm mt-2">{couponError}</p>
          )}
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs md:text-sm text-gray-400 mb-2">Available Coupons:</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(availableCoupons).map((code) => (
                <span
                  key={code}
                  className="text-xs px-2 py-1 bg-gray-800 border border-gray-700 rounded text-gray-300"
                >
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-800 shadow-xl">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-800">
            Price Details
          </h3>

          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            <div className="flex justify-between text-sm md:text-base">
              <span className="text-gray-400">Subtotal ({itemCount} items)</span>
              <span className="text-white font-semibold">₹{totalPrice.toLocaleString()}</span>
            </div>
            
            {appliedCoupon && (
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-gray-400">Discount ({appliedCoupon})</span>
                <span className="text-green-400 font-semibold">-₹{discount.toLocaleString()}</span>
              </div>
            )}
            
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

            {totalPrice < 500 && !appliedCoupon && (
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-2 md:p-3">
                <p className="text-xs md:text-sm text-[#D4AF37]">
                  💡 Add ₹{(500 - totalPrice).toLocaleString()} more for free shipping!
                </p>
              </div>
            )}

            <div className="pt-3 md:pt-4 border-t border-gray-800">
              <div className="flex justify-between items-center">
                <span className="text-lg md:text-xl font-bold text-white">Total Amount</span>
                <span className="text-2xl md:text-3xl font-bold text-[#D4AF37]">
                  ₹{finalTotal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-[#F4D03F] hover:to-amber-400 text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>Proceed to Payment</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default OrderSummary;

