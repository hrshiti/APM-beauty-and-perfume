import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice, getItemCount } = useCartStore();
  
  const productImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  
  const totalPrice = getTotalPrice();
  const itemCount = getItemCount();
  const shipping = totalPrice > 500 ? 0 : 50;
  const finalTotal = totalPrice + shipping;

  const getProductImage = (productId) => {
    const index = parseInt(productId) || 0;
    return productImages[index % productImages.length] || img1;
  };

  const handlePlaceOrder = () => {
    navigate('/order-summary');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
        {/* Header */}
        <nav className="w-full bg-black border-b border-gray-800 sticky top-0 z-40">
          <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <h1 className="text-base md:text-xl lg:text-2xl font-semibold uppercase tracking-wider text-white">
                Shopping Cart
              </h1>

              <div className="w-10"></div>
            </div>
          </div>
        </nav>

        {/* Empty Cart */}
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-2xl">
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <svg className="w-24 h-24 md:w-32 md:h-32 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-6 md:mb-8">Add some products to get started!</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-[#D4AF37] hover:bg-[#F4D03F] text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base transition-all duration-300 shadow-lg"
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
              onClick={() => navigate('/')}
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
                Shopping Cart
              </h1>
            </div>

            <button
              onClick={clearCart}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors text-gray-400 hover:text-red-400"
              title="Clear Cart"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 max-w-4xl">
        {/* Cart Header */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
            Your Items ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </h2>
          <p className="text-sm md:text-base text-gray-400">Review and manage your cart</p>
        </div>

        {/* Cart Items */}
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {items.map((item, index) => {
            const itemPrice = item.selectedPrice || item.price || 699;
            const itemTotal = itemPrice * item.quantity;
            const productImage = getProductImage(item.id);

            return (
              <div
                key={`${item.id}-${item.size}-${index}`}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-5 border border-gray-800 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex gap-3 md:gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-800">
                      <img
                        src={item.image || productImage}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold text-white mb-1 truncate">
                          {item.name}
                        </h3>
                        {item.size && (
                          <p className="text-xs md:text-sm text-gray-400 mb-1">
                            Size: {item.size}
                          </p>
                        )}
                        <p className="text-sm md:text-base font-bold text-[#D4AF37]">
                          ₹{itemPrice.toLocaleString()}
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="flex-shrink-0 p-1.5 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-red-400"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3 md:mt-4">
                      <div className="flex items-center gap-2 md:gap-3 bg-gray-800 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-md hover:bg-gray-700 transition-colors text-white"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 md:w-10 text-center text-sm md:text-base font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-md hover:bg-gray-700 transition-colors text-white"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-xs text-gray-400">Total</p>
                        <p className="text-base md:text-lg font-bold text-[#D4AF37]">
                          ₹{itemTotal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Place Order Button */}
        <div className="sticky bottom-20 md:static bg-black border-t border-gray-800 md:border-0 pt-4 md:pt-0 pb-4 md:pb-0">
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-[#F4D03F] hover:to-amber-400 text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Place Order</span>
          </button>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Cart;

