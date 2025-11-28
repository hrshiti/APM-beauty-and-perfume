import React, { useState } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProducts } from '../data/productsData';
import { useWishlistStore } from '../store/wishlistStore';
import { useCartStore } from '../store/cartStore';
import Toast from './Toast';
import logo from '../assets/logo vintage.png';
import heroimg from '../assets/heroimg.png';
import { pageVariants, containerVariants, itemVariants, buttonVariants, cardHoverVariants } from '../utils/pageAnimations';
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

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { addItem, getItemCount } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const cartCount = getItemCount();

  // Get active navigation tab
  const getActiveNavTab = () => {
    if (location.pathname === '/') return 'Home';
    if (location.pathname === '/products' || location.pathname.startsWith('/shop')) return 'Shop All';
    if (location.pathname === '/deals' || location.pathname.startsWith('/combo-deals')) return 'Deals';
    if (location.pathname === '/account') return 'Account';
    return '';
  };

  const activeNavTab = getActiveNavTab();

  // Map images to products (fallback)
  const productImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

  // Find the product by id
  const product = allProducts.find(p => p.id === id);

  // If product not found, redirect or show error
  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <Link to="/products" className="text-[#D4AF37] hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get product image - use product.image if available, otherwise fallback
  const productIndex = allProducts.findIndex(p => p.id === id);
  const productImage = product.image || productImages[productIndex % productImages.length] || heroimg;

  // Get price
  let price = '';
  if (product.price) {
    price = `₹${product.price}`;
  } else if (product.sizes && product.sizes.length > 0) {
    const priceSize = product.sizes[2] || product.sizes[0];
    price = `₹${priceSize.price}`;
  } else {
    price = '₹699';
  }

  // Get size (ml)
  const size = product.size || (product.sizes && product.sizes.length > 0 ? product.sizes[2]?.size || product.sizes[0]?.size : '100ml');
  const brandName = product.brandName || 'VINTAGE BEAUTY';
  const rating = 4.8; // Default rating

  // Get related products (exclude current product)
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)
    .map((p, index) => ({
      ...p,
      image: p.image || productImages[(productIndex + index + 1) % productImages.length],
    }));

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    const size = selectedSize || (product.sizes?.[2]?.size || product.sizes?.[0]?.size || '100ml');
    addItem(product, quantity, size);
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);
  };

  return (
    <motion.div 
      className="min-h-screen bg-black text-white overflow-x-hidden pb-24 md:pb-0"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Navigation Bar */}
      <motion.nav 
        className="w-full bg-black border-b border-gray-800 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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

            {/* Navigation Links - Desktop Only */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 relative ${
                  activeNavTab === 'Home'
                    ? 'text-[#D4AF37]'
                    : 'text-gray-400 hover:text-[#D4AF37]'
                }`}
              >
                Home
                {activeNavTab === 'Home' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"></span>
                )}
              </Link>
              <Link
                to="/products"
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 relative ${
                  activeNavTab === 'Shop All'
                    ? 'text-[#D4AF37]'
                    : 'text-gray-400 hover:text-[#D4AF37]'
                }`}
              >
                Shop All
                {activeNavTab === 'Shop All' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"></span>
                )}
              </Link>
              <Link
                to="/deals"
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 relative ${
                  activeNavTab === 'Deals'
                    ? 'text-[#D4AF37]'
                    : 'text-gray-400 hover:text-[#D4AF37]'
                }`}
              >
                Deals
                {activeNavTab === 'Deals' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"></span>
                )}
              </Link>
              <Link
                to="/account"
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 relative ${
                  activeNavTab === 'Account'
                    ? 'text-[#D4AF37]'
                    : 'text-gray-400 hover:text-[#D4AF37]'
                }`}
              >
                Account
                {activeNavTab === 'Account' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"></span>
                )}
              </Link>
            </nav>

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
      </motion.nav>

      {/* Product Image Section */}
      <motion.div 
        className="w-full bg-black"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px]">
          <motion.img
            src={productImage}
            alt={product.name}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-full object-contain rounded-2xl md:rounded-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Product Details Card */}
      <motion.div 
        className="bg-[#3A2E1F] md:bg-[#4A3A2A] rounded-t-3xl md:rounded-t-[40px] -mt-8 md:-mt-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
          {/* 4 Specification Boxes */}
          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="bg-black bg-opacity-30 rounded-lg p-2 md:p-3 text-center">
              <p className="text-[10px] md:text-xs text-gray-300 mb-1">Size</p>
              <p className="text-xs md:text-sm font-bold text-white">{size}</p>
            </div>
            <div className="bg-black bg-opacity-30 rounded-lg p-2 md:p-3 text-center">
              <p className="text-[10px] md:text-xs text-gray-300 mb-1">Purity</p>
              <p className="text-xs md:text-sm font-bold text-white">100% Pure</p>
            </div>
            <div className="bg-black bg-opacity-30 rounded-lg p-2 md:p-3 text-center">
              <p className="text-[10px] md:text-xs text-gray-300 mb-1">Rating</p>
              <p className="text-xs md:text-sm font-bold text-white">{rating} ⭐</p>
            </div>
            <div className="bg-black bg-opacity-30 rounded-lg p-2 md:p-3 text-center">
              <p className="text-[10px] md:text-xs text-gray-300 mb-1">Brand</p>
              <p className="text-xs md:text-sm font-bold text-white truncate">{brandName}</p>
            </div>
          </div>

          {/* Product Name and Price */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white flex-1">
              {product.name}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#D4AF37] ml-4">
              {price}
            </p>
          </div>

          {/* Product Description */}
          <div className="mb-6 md:mb-8">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {product.description || product.scentProfile || 'Premium fragrance from Vintage Beauty. Experience luxury and elegance with this exquisite scent.'}
            </p>
          </div>

          {/* Reviews Section */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Reviews & Ratings</h3>
            <div className="bg-black bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-[#D4AF37]' : 'text-gray-600'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-300">({rating} out of 5)</span>
              </div>
              <p className="text-sm text-gray-400">Based on customer reviews</p>
            </div>
          </div>

          {/* Recommended Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-24 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Recommended Products</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {relatedProducts.map((relatedProduct) => {
                  const relatedPrice = relatedProduct.price 
                    ? `₹${relatedProduct.price}` 
                    : (relatedProduct.sizes && relatedProduct.sizes.length > 0 
                      ? `₹${relatedProduct.sizes[2]?.price || relatedProduct.sizes[0]?.price}` 
                      : '₹699');
                  
                  return (
                    <Link
                      key={relatedProduct.id}
                      to={`/product/${relatedProduct.id}`}
                      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
                    >
                      <div className="relative h-32 md:h-40 bg-gray-800 overflow-hidden">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 md:p-3">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs md:text-sm font-semibold text-white flex-1 truncate hover:text-[#D4AF37] transition-colors">
                            {relatedProduct.name}
                          </h4>
                          <p className="text-xs font-bold text-[#D4AF37] whitespace-nowrap">
                            {relatedPrice}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Fixed Bottom Bar - Quantity and Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#3A2E1F] md:bg-[#4A3A2A] border-t border-gray-700 p-4 md:hidden z-50">
        <div className="container mx-auto flex items-center gap-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-black bg-opacity-30 rounded-lg px-3 py-2">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="text-white font-bold px-3 min-w-[30px] text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#D4AF37] hover:bg-[#F4D03F] text-black font-bold px-4 py-3 rounded-lg text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add to cart</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Add to Cart Section */}
      <div className="hidden md:block bg-[#3A2E1F] md:bg-[#4A3A2A] border-t border-gray-700 p-6 sticky bottom-0 z-40">
        <div className="container mx-auto flex items-center justify-center gap-4">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-black bg-opacity-30 rounded-lg px-4 py-3">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="text-white font-bold px-4 min-w-[40px] text-center text-lg">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-[#D4AF37] hover:bg-[#F4D03F] text-black font-bold px-8 py-3 rounded-lg text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-3 min-w-[200px]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add to cart</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast 
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </motion.div>
  );
};

export default ProductDetail;

