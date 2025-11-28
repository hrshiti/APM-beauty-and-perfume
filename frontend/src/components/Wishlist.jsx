import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWishlistStore } from '../store/wishlistStore';
import { useCartStore } from '../store/cartStore';
import logo from '../assets/logo vintage.png';
// Import product images from assets
import img1 from '../assets/images vintage/1.jpg';
import img2 from '../assets/images vintage/2.jpg';
import img3 from '../assets/images vintage/3.jpg';
import img4 from '../assets/images vintage/4.jpg';
import img5 from '../assets/images vintage/5.jpg';
import img6 from '../assets/images vintage/6.jpg';
import img7 from '../assets/images vintage/7.jpg';
import img8 from '../assets/images vintage/8-222.jpg';

const Wishlist = () => {
  const navigate = useNavigate();
  const { items, removeItem, isInWishlist, toggleItem } = useWishlistStore();
  const { getItemCount } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = getItemCount();

  // Map images to products
  const productImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  // Prepare wishlist items with images and formatted prices
  const wishlistItems = items.map((product) => {
    const productIndex = product.id ? parseInt(product.id.slice(-1)) || 0 : 0;
    const image = productImages[productIndex % productImages.length];
    let price = '';
    
    if (product.price) {
      price = `₹${product.price}`;
    } else if (product.sizes && product.sizes.length > 0) {
      const priceSize = product.sizes[2] || product.sizes[0];
      price = `₹${priceSize.price}`;
    } else {
      price = '₹699';
    }

    return {
      ...product,
      image,
      displayPrice: price,
    };
  });

  const handleWishlistToggle = (product) => {
    toggleItem(product);
  };

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
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="w-full bg-black border-b border-gray-800 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            My Wishlist
          </h2>
          <p className="text-center text-gray-400 mt-2">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
      </div>

      {/* Wishlist Items */}
      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <svg className="w-24 h-24 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Your wishlist is empty</h3>
          <p className="text-gray-400 text-center mb-6">Start adding products to your wishlist</p>
          <Link
            to="/products"
            className="bg-[#D4AF37] hover:bg-[#F4D03F] text-black font-bold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <section className="w-full bg-black py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {wishlistItems.map((product) => {
                const inWishlist = isInWishlist(product.id);
                
                return (
                  <div
                    key={product.id}
                    className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group relative"
                  >
                    {/* Product Image */}
                    <div className="relative h-36 md:h-48 lg:h-56 bg-gray-800 overflow-hidden">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </Link>
                      
                      {/* Wishlist Heart Icon */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWishlistToggle(product);
                        }}
                        className="absolute top-3 right-3 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-300 z-10"
                        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <svg
                          className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                            inWishlist
                              ? 'text-red-500 fill-red-500'
                              : 'text-white hover:text-red-400'
                          }`}
                          fill={inWishlist ? 'currentColor' : 'none'}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-3 md:p-4 bg-gray-900">
                      {/* Name and Price in one row */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <Link to={`/product/${product.id}`}>
                          <h4 className="text-sm md:text-base font-semibold text-white flex-1 truncate hover:text-[#D4AF37] transition-colors">
                            {product.name}
                          </h4>
                        </Link>
                        <p className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
                          {product.displayPrice}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs text-gray-400 line-clamp-2 mb-2">
                        {product.description}
                      </p>
                      
                      {/* Add to Cart Button */}
                      <Link to={`/product/${product.id}`}>
                        <button className="w-full mt-2 bg-[#D4AF37] hover:bg-[#F4D03F] text-black font-bold px-2 py-1.5 rounded-lg text-[10px] md:text-xs transition-all duration-300 shadow-md hover:shadow-lg">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="w-64 h-full bg-gray-900 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-800">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-white hover:text-[#D4AF37] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-white hover:text-[#D4AF37] transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="text-white hover:text-[#D4AF37] transition-colors">
                    Wishlist
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

