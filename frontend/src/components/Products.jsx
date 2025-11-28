import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { fadeInUp, staggerContainer, staggerItem, buttonHover, cardHover } from '../utils/animations';
import { allProducts } from '../data/productsData';
import { useWishlistStore } from '../store/wishlistStore';
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

// Module-level cache to persist products across component unmounts
let cachedProducts = null;

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { addItem, getItemCount } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Map images to products (fallback if product doesn't have image)
  const productImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

  // Prepare products with images and formatted prices
  // Use cached products if available, otherwise process allProducts
  const [products, setProducts] = useState(() => {
    // If we have cached products, use them immediately
    if (cachedProducts && cachedProducts.length > 0) {
      return cachedProducts;
    }
    
    // Otherwise, process allProducts
    if (!allProducts || !Array.isArray(allProducts) || allProducts.length === 0) {
      return [];
    }
    
    const processedProducts = allProducts.map((product, index) => {
      const image = product.image || productImages[index % productImages.length];
      let price = '';
      
      if (product.price) {
        price = `₹${product.price}`;
      } else if (product.sizes && product.sizes.length > 0) {
        // Use 100ml price (index 2) or first available size
        const priceSize = product.sizes[2] || product.sizes[0];
        price = `₹${priceSize.price}`;
      } else {
        price = '₹699';
      }

      return {
        ...product,
        image: image || productImages[0],
        price,
        displayPrice: price,
      };
    });
    
    // Cache the processed products for future use
    cachedProducts = processedProducts;
    return processedProducts;
  });

  // Update products if allProducts becomes available and products is empty
  useEffect(() => {
    if (allProducts && Array.isArray(allProducts) && allProducts.length > 0) {
      // Only update if products is empty or cache is missing
      if (products.length === 0 || !cachedProducts) {
        const processedProducts = allProducts.map((product, index) => {
          const image = product.image || productImages[index % productImages.length];
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
            image: image || productImages[0],
            price,
            displayPrice: price,
          };
        });
        cachedProducts = processedProducts;
        setProducts(processedProducts);
      }
    }
  }, [allProducts, products.length]);

  const handleWishlistToggle = (product, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const wasInWishlist = isInWishlist(product.id);
    toggleItem(product);
    
    if (wasInWishlist) {
      toast.success('Item removed from wishlist', {
        style: {
          background: '#1F1F1F',
          color: '#fff',
          border: '1px solid #D4AF37',
          borderRadius: '8px',
        },
        iconTheme: {
          primary: '#D4AF37',
          secondary: '#1F1F1F',
        },
      });
    } else {
      toast.success('Item added to wishlist', {
        style: {
          background: '#1F1F1F',
          color: '#fff',
          border: '1px solid #D4AF37',
          borderRadius: '8px',
        },
        iconTheme: {
          primary: '#D4AF37',
          secondary: '#1F1F1F',
        },
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white overflow-x-hidden pb-20 md:pb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#1F1F1F',
            color: '#fff',
            border: '1px solid #D4AF37',
            borderRadius: '8px',
          },
        }}
      />
      {/* Navigation Bar */}
      <motion.nav
        className="w-full bg-black border-b border-gray-800 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            <motion.button
              onClick={() => navigate('/cart')}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors relative"
              aria-label="Shopping Cart"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Page Header */}
      <motion.div
        className="w-full bg-black border-b border-gray-800 py-6 md:py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            All Products
          </h2>
          <p className="text-center text-gray-400 mt-2">
            Discover our complete collection
          </p>
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.section
        className="w-full bg-black py-8 md:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {products && products.length > 0 ? products.map((product, index) => {
              const inWishlist = isInWishlist(product.id);
              
              return (
                <motion.div
                  key={product.id || index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative block"
                  >
                  {/* Product Image */}
                  <div className="relative h-36 md:h-48 lg:h-56 bg-gray-800 overflow-hidden">
                    <img
                      src={product.image || productImages[index % productImages.length] || productImages[0]}
                      alt={product.name || 'Product'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Wishlist Heart Icon */}
                    <button
                      onClick={(e) => handleWishlistToggle(product, e)}
                      className="absolute top-3 right-3 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-300 z-20"
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
                      <h4 className="text-sm md:text-base font-semibold text-white flex-1 truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
                        {product.displayPrice}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-gray-400 line-clamp-2 mb-2">
                      {product.description}
                    </p>
                    
                    {/* Add to Cart Button */}
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product, 1);
                        toast.success(`${product.name} added to cart!`, {
                          style: {
                            background: '#1F1F1F',
                            color: '#fff',
                            border: '1px solid #D4AF37',
                            borderRadius: '8px',
                          },
                          iconTheme: {
                            primary: '#D4AF37',
                            secondary: '#1F1F1F',
                          },
                        });
                      }}
                      className="w-full mt-2 bg-[#D4AF37] hover:bg-[#F4D03F] text-black font-bold px-2 py-1.5 rounded-lg text-[10px] md:text-xs transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                  </Link>
                </motion.div>
              );
            }) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">No products found</p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>

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
                  <a href="/" className="text-white hover:text-[#D4AF37] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-white hover:text-[#D4AF37] transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}


      {/* Bottom Navigation Bar - Mobile Only */}
      <BottomNavbar />
    </motion.div>
  );
};

export default Products;

