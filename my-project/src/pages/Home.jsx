import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { useAuthStore } from '../store/authStore';
import { getMockCategories } from '../services/mockDataService';
import toast from 'react-hot-toast';

// Import images from assets vintage folder
import img2609 from '../assets/images vintage/1.jpg';
import img2610 from '../assets/images vintage/2.jpg';
import img2612 from '../assets/images vintage/3.jpg';
import img2616 from '../assets/images vintage/4.jpg';
import img2617 from '../assets/images vintage/5.jpg';
import img2618 from '../assets/images vintage/6.jpg';
import img2619 from '../assets/images vintage/7.jpg';
import img2638 from '../assets/images vintage/8-222.jpg';
import img2645 from '../assets/images vintage/2_1.jpg';
import img2648 from '../assets/images vintage/3_1.jpg';
import img2651 from '../assets/images vintage/4_1.jpg';
import img2653 from '../assets/images vintage/5_1.jpg';
import img2657 from '../assets/images vintage/4----2.jpg';
import img2669 from '../assets/images vintage/IMG_6487.jpg';
import img2698 from '../assets/images vintage/IMG_6503.jpg';
import img2700 from '../assets/images vintage/IMG_9720.JPG';
import img2702 from '../assets/images vintage/1.jpg';
import img2703 from '../assets/images vintage/2.jpg';
import img2705 from '../assets/images vintage/3.jpg';
import img2707 from '../assets/images vintage/4.jpg';
import img2709 from '../assets/images vintage/5.jpg';
import img2711 from '../assets/images vintage/6.jpg';
import img2719 from '../assets/images vintage/7.jpg';
import img2721 from '../assets/images vintage/8-222.jpg';
import img2723 from '../assets/images vintage/2_1.jpg';
import img2725 from '../assets/images vintage/3_1.jpg';
import img2727 from '../assets/images vintage/4_1.jpg';
import img2728 from '../assets/images vintage/5_1.jpg';
import img2732 from '../assets/images vintage/IMG_6487.jpg';

const Home = () => {
  const navigate = useNavigate();
  const { addItem, openCart, closeCart, getItemCount } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist, getCount: getWishlistCount } = useWishlistStore();
  const { isAuthenticated, user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('bestsellers');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentOffer, setCurrentOffer] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCategoriesOpen, setIsSidebarCategoriesOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categories = getMockCategories();
  
  const cartItemCount = getItemCount();
  const wishlistCount = getWishlistCount();

  // Promotional offers for top header
  const offers = [
    "FLAT 5% OFF ON ALL PREPAID ORDERS",
    "FREE SHIPPING ON ORDERS ABOVE ₹999",
    "BUY 2 GET 1 FREE ON SELECTED PERFUMES"
  ];

  // Banner data for hero section
  const banners = [
    {
      title: "Say Goodbye to Grey. THE BLACK MAGIC WAY!",
      subtitle: "Premium Hair Care Collection",
      price: "₹399",
      originalPrice: "₹599",
      buttonText: "SHOP NOW",
      bgColor: "bg-purple-600",
      image: img2609
    },
    {
      title: "Luxury Perfumes Collection",
      subtitle: "Discover Your Signature Scent",
      price: "₹899",
      originalPrice: "₹1299",
      buttonText: "EXPLORE NOW",
      bgColor: "bg-indigo-600",
      image: img2610
    },
    {
      title: "New Arrivals - Limited Edition",
      subtitle: "Exclusive Fragrances",
      price: "₹1199",
      originalPrice: "₹1599",
      buttonText: "SHOP NOW",
      bgColor: "bg-pink-600",
      image: img2612
    }
  ];

  // Sample perfume products
  const bestsellers = [
    {
      id: 1,
      category: "GIFT SET FOR MEN",
      name: "Luxury Perfume Gift Set For Men",
      tag: "BESTSELLER",
      discount: "36% OFF",
      image: img2616,
      rating: 4.7,
      reviews: 1300,
      price: "549.00",
      originalPrice: "849.00"
    },
    {
      id: 2,
      category: "EAU DE PARFUM",
      name: "CEO Man Perfume",
      tag: "BESTSELLER",
      discount: "51% OFF",
      image: img2617,
      rating: 4.8,
      reviews: 1100,
      price: "449.00",
      originalPrice: "899.00"
    },
    {
      id: 3,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Premium",
      tag: "BESTSELLER",
      discount: "42% OFF",
      image: img2618,
      rating: 4.6,
      reviews: 950,
      price: "699.00",
      originalPrice: "1199.00"
    },
    {
      id: 4,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Classic",
      tag: "BESTSELLER",
      discount: "33% OFF",
      image: img2619,
      rating: 4.5,
      reviews: 850,
      price: "599.00",
      originalPrice: "899.00"
    }
  ];

  const newArrivals = [
    {
      id: 5,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Fresh",
      tag: "NEW",
      discount: "38% OFF",
      image: img2638,
      rating: 4.9,
      reviews: 450,
      price: "749.00",
      originalPrice: "1199.00"
    },
    {
      id: 6,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Modern",
      tag: "NEW",
      discount: "40% OFF",
      image: img2645,
      rating: 4.7,
      reviews: 380,
      price: "799.00",
      originalPrice: "1299.00"
    },
    {
      id: 7,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Luxe",
      tag: "NEW",
      discount: "35% OFF",
      image: img2648,
      rating: 4.8,
      reviews: 320,
      price: "999.00",
      originalPrice: "1499.00"
    },
    {
      id: 8,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Signature",
      tag: "NEW",
      discount: "30% OFF",
      image: img2651,
      rating: 4.6,
      reviews: 280,
      price: "899.00",
      originalPrice: "1299.00"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sanna Thakur",
      instagram: "sannathakur_",
      image: img2719,
      review: [
        "VINTAGE BEAUTY has raised the bar for the perfume industry,",
        "Such good quality at very affordable price"
      ],
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Sharma",
      instagram: "rahul_sharma",
      image: img2721,
      review: [
        "Amazing fragrances! The quality is outstanding",
        "Best purchase I've made this year"
      ],
      rating: 5
    },
    {
      id: 3,
      name: "Priya Patel",
      instagram: "priya_patel",
      image: img2723,
      review: [
        "Love the variety of scents available",
        "Great value for money and long-lasting"
      ],
      rating: 5
    },
    {
      id: 4,
      name: "Amit Kumar",
      instagram: "amit_kumar",
      image: img2725,
      review: [
        "Premium quality at affordable prices",
        "Highly recommend to everyone"
      ],
      rating: 5
    },
    {
      id: 5,
      name: "Neha Singh",
      instagram: "neha_singh",
      image: img2727,
      review: [
        "The perfumes are absolutely divine",
        "Customer service is excellent too"
      ],
      rating: 5
    }
  ];

  // Recommended products for "You May Also Like"
  const recommendedProducts = [
    {
      id: 9,
      name: "ROSE Woman",
      image: img2719,
      price: "465.00",
      originalPrice: "899.00"
    },
    {
      id: 10,
      name: "CEO Man",
      image: img2721,
      price: "449.00",
      originalPrice: "899.00"
    },
    {
      id: 11,
      name: "SENORITA W",
      image: img2723,
      price: "465.00",
      originalPrice: "899.00"
    }
  ];
  
  // Add to cart function
  const addToCart = (product) => {
    // Convert price to number if it's a string
    const productToAdd = {
      ...product,
      price: typeof product.price === 'string' ? parseFloat(product.price) : product.price,
      originalPrice: product.originalPrice ? (typeof product.originalPrice === 'string' ? parseFloat(product.originalPrice) : product.originalPrice) : undefined
    };
    addItem(productToAdd, 1);
    toast.success('Added to cart!');
    openCart();
  };

  // Wishlist toggle function
  const handleWishlistToggle = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    const productToAdd = {
      ...product,
      price: typeof product.price === 'string' ? parseFloat(product.price) : product.price,
      originalPrice: product.originalPrice ? (typeof product.originalPrice === 'string' ? parseFloat(product.originalPrice) : product.originalPrice) : undefined
    };
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(productToAdd);
      toast.success('Added to wishlist');
    }
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    useCartStore.getState().removeItem(productId);
  };

  // Auto-change banner every 5 seconds
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(bannerInterval);
  }, [banners.length]);

  // Auto-change offer every 4 seconds
  useEffect(() => {
    const offerInterval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(offerInterval);
  }, [offers.length]);

  const currentProducts = activeTab === 'bestsellers' ? bestsellers : newArrivals;

  return (
    <div className={`min-h-screen bg-gray-50 pb-20 md:pb-0 safe-area-inset-bottom overflow-x-hidden w-full transition-all duration-300 ${isSidebarOpen ? 'md:ml-80 md:w-[calc(100%-20rem)]' : 'md:w-full'}`}>
      {/* Mobile Header - Only visible on mobile */}
      <nav className="flex md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-[100] w-full max-w-full">
        <div className="container mx-auto px-4 py-3 max-w-full w-full">
          <div className="flex items-center justify-between w-full">
            {/* Left - Hamburger Menu */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Center - Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Vintage Beauty Logo" 
                className="w-7 h-7 object-contain"
              />
              <h1 className="text-lg font-bold text-gray-800">VINTAGE BEAUTY®</h1>
            </Link>

            {/* Right - Cart & User Icon */}
            <div className="flex items-center gap-3">
              {/* Cart Icon */}
              <button 
                onClick={openCart}
                className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </span>
                )}
              </button>

              {isAuthenticated ? (
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 border border-gray-100 z-50">
                      <Link 
                        to="/account" 
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors"
                      >
                        My Account
                      </Link>
                      <Link 
                        to="/orders" 
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors"
                      >
                        My Orders
                      </Link>
                      <Link 
                        to="/wishlist" 
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors"
                      >
                        Wishlist
                      </Link>
                      <button 
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </button>
              ) : (
                <Link 
                  to="/login" 
                  className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Top Navbar - Only visible in webview - Fixed */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-[100] w-full max-w-full">
        <div className="container mx-auto px-6 py-4 max-w-full w-full">
          <div className="flex items-center justify-between">
            {/* Left side - Hamburger Menu & Logo */}
            <div className="flex-1 flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Link to="/" className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">VINTAGE BEAUTY®</h1>
              </Link>
            </div>
            
            {/* Center - Navigation Links */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-6">
                <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                  Home
                </Link>
                <Link to="/shop-all" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                  Shop All
                </Link>
                <Link to="/crazy-deals" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                  Crazy Deals
                </Link>
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  <button 
                    className={`font-medium text-sm transition-colors duration-200 flex items-center gap-1 ${
                      isCategoriesOpen 
                        ? 'text-purple-600' 
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    Categories
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isCategoriesOpen && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl border border-gray-100 py-2 z-50"
                      onMouseEnter={() => setIsCategoriesOpen(true)}
                      onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/category/${category.slug}`}
                          className="block px-5 py-2.5 text-sm font-normal text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                          onClick={() => setIsCategoriesOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/account" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                  Account
                </Link>
              </div>
            </div>

            {/* Right side - Support, Cart */}
            <div className="flex-1 flex items-center justify-end gap-6">
              {/* Support */}
              <a href="tel:+919876543210" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Support</span>
              </a>

              {/* Wishlist */}
              <Link 
                to="/wishlist" 
                className="relative text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              
              {/* Cart */}
              <button 
                className="relative text-gray-700 hover:text-purple-600 transition-colors duration-200" 
                onClick={openCart}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* User Account */}
              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} 
                    className="flex items-center gap-2"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 border border-gray-100 z-50">
                      <Link 
                        to="/account" 
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors"
                      >
                        My Account
                      </Link>
                      <Link 
                        to="/orders" 
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors"
                      >
                        My Orders
                      </Link>
                      <Link 
                        to="/wishlist" 
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors"
                      >
                        Wishlist
                      </Link>
                      <button 
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                  title="Login"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Top Black Header - Promotional Carousel */}
      <div className="bg-black text-white py-5 relative overflow-hidden w-full max-w-full border-t border-pink-200 md:pt-[73px] pt-[60px]">
        <div className="flex items-center justify-center relative w-full max-w-full min-h-[40px]">
          <button 
            className="absolute left-2 md:left-4 z-10 p-1.5 flex items-center justify-center"
            onClick={() => setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length)}
          >
            <svg className="w-5 h-5 text-gray-300 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-xs md:text-sm font-medium text-center px-10 md:px-16 w-full max-w-full flex items-center justify-center">
            {offers[currentOffer]}
          </div>
          <button 
            className="absolute right-2 md:right-4 z-10 p-1.5 flex items-center justify-center"
            onClick={() => setCurrentOffer((prev) => (prev + 1) % offers.length)}
          >
            <svg className="w-5 h-5 text-gray-300 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section - Banner Carousel */}
      <section className="container mx-auto px-2 md:px-4 py-4 md:py-6 max-w-full overflow-hidden w-full">
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg bg-white">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image from assets folder - Low z-index */}
              {banner.image && (
                <img 
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              )}
              {/* Dark overlay for better text readability - Above image but below text */}
              <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
              
              {/* Content - High z-index so text shows on top */}
              <div className="absolute inset-0 z-[2] container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between h-full">
                <div className="text-white flex-1 mb-4 md:mb-0">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">{banner.title}</h2>
                  <p className="text-sm md:text-lg mb-4 opacity-90">{banner.subtitle}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl md:text-3xl font-bold">Buy @ {banner.price}</span>
                    <span className="text-sm md:text-lg line-through opacity-75">{banner.originalPrice}</span>
                  </div>
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                    {banner.buttonText}
                  </button>
                </div>
                <div className="hidden md:block flex-1 text-center">
                  <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto overflow-hidden">
                    {banner.image && (
                      <img 
                        src={banner.image} 
                        alt={banner.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Banner Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentBanner ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers / New Arrivals Section */}
      <section className="container mx-auto px-2 md:px-4 py-6 md:py-8 max-w-full overflow-hidden w-full">
        {/* Tabs */}
        <div className="flex gap-2 md:gap-4 mb-6 border-b w-full max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveTab('bestsellers')}
            className={`pb-3 px-2 md:px-4 font-semibold transition flex-shrink-0 ${
              activeTab === 'bestsellers'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-400'
            }`}
          >
            BESTSELLERS
          </button>
          <button
            onClick={() => setActiveTab('newarrivals')}
            className={`pb-3 px-2 md:px-4 font-semibold transition flex-shrink-0 ${
              activeTab === 'newarrivals'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-400'
            }`}
          >
            NEW ARRIVALS
          </button>
        </div>

        {/* Product Horizontal Scroll Row */}
        <div className="w-full max-w-full overflow-hidden">
          <div className="flex gap-3 md:gap-6 overflow-x-auto pb-4 scrollbar-hide w-full max-w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition flex-shrink-0 w-40 md:w-64 max-w-[40%] md:max-w-none">
              {/* Category Label */}
              <div className="px-3 pt-3 pb-1">
                <p className="text-xs text-gray-600 font-medium uppercase">{product.category}</p>
              </div>
              
              {/* Product Image Container */}
              <div className="relative px-3 pb-2">
                <Link to={`/product/${product.id}`} className="block relative w-full h-48 md:h-56 bg-gray-50 rounded-xl overflow-hidden group cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                  />
                  
                  {/* Wishlist Heart Icon - Top Right */}
                  <button
                    onClick={(e) => handleWishlistToggle(product, e)}
                    className={`absolute top-2 right-2 p-1.5 md:p-2 rounded-full transition-colors z-20 ${
                      isInWishlist(product.id)
                        ? 'bg-red-500 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  
                  {/* BESTSELLER Badge - Top Left */}
                  {product.tag && (
                    <span className="absolute top-2 left-2 bg-amber-700 text-white text-xs font-semibold px-2 py-1 rounded z-10 pointer-events-none">
                      {product.tag}
                    </span>
                  )}
                  
                  {/* Discount Badge - Bottom Left */}
                  {product.discount && (
                    <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded z-10 pointer-events-none">
                      {product.discount}
                    </span>
                  )}
                </Link>
              </div>
              
              {/* Product Details */}
              <div className="px-3 pb-3">
                {/* Product Name */}
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-sm text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] hover:text-purple-600 transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                
                {/* Rating Section */}
                <div className="flex items-center gap-1 mb-2">
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                  <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-600">({(product.reviews / 1000).toFixed(1)}K Reviews)</span>
                </div>
                
                {/* Pricing */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-black">₹{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                </div>
                
                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-black text-white py-2.5 rounded-md font-semibold text-sm hover:bg-gray-800 transition"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>
        
        {/* VIEW ALL Button */}
        <div className="flex justify-center mt-6 md:mt-8">
          <Link to="/shop-all" className="border-2 border-black text-black bg-white px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition inline-block">
            VIEW ALL
          </Link>
        </div>
      </section>

      {/* Luxury Categories Section */}
      <section className="container mx-auto px-2 md:px-4 py-6 md:py-8 max-w-full overflow-hidden w-full">
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">LUXURY CATEGORIES</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              id: 1,
              name: "COSMETICS",
              image: img2653,
              hasMultipleImages: false
            },
            {
              id: 2,
              name: "SKINCARE",
              image: img2657,
              hasMultipleImages: false
            },
            {
              id: 3,
              name: "LUXURY PERFUMES",
              image: img2669,
              hasMultipleImages: false
            },
            {
              id: 4,
              name: "BATH & BODY",
              image1: img2698,
              image2: img2700,
              hasMultipleImages: true
            },
            {
              id: 5,
              name: "MEN'S COLLECTION",
              image: img2702,
              hasMultipleImages: false
            },
            {
              id: 6,
              name: "GIFT SETS",
              image: img2703,
              hasMultipleImages: false
            }
          ].map((category) => {
            // Convert category name to slug
            const getCategorySlug = (name) => {
              const slugMap = {
                'COSMETICS': 'cosmetics',
                'SKINCARE': 'skincare',
                'LUXURY PERFUMES': 'perfumes',
                'BATH & BODY': 'bath-body',
                "MEN'S COLLECTION": 'men',
                'GIFT SETS': 'gift-sets'
              };
              return slugMap[name] || name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/'/g, '');
            };

            const categorySlug = getCategorySlug(category.name);

            return (
            <Link 
              key={category.id}
              to={`/category/${categorySlug}`}
              className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer block"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 md:h-56 bg-gray-100 overflow-hidden">
                {category.hasMultipleImages ? (
                  <div className="flex items-center justify-center gap-2 w-full h-full p-4">
                    <div className="w-24 h-32 bg-white rounded overflow-hidden">
                      <img 
                        src={category.image1} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-24 h-32 bg-white rounded overflow-hidden">
                      <img 
                        src={category.image2} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Category Name */}
              <div className="p-4 text-center">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 uppercase">
                  {category.name}
                </h3>
              </div>
            </Link>
          );
          })}
        </div>
      </section>

      {/* Fragrance Finder Banner */}
      <section className="container mx-auto px-2 md:px-4 py-1.5 md:py-2 max-w-full overflow-hidden w-full">
        <div className="bg-gradient-to-r from-orange-200 via-orange-100 to-orange-50 rounded-xl overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-2 items-center p-2 md:p-3">
            <div className="z-10">
              <h2 className="text-base md:text-lg font-bold text-orange-600 mb-0.5 uppercase tracking-tight">FRAGRANCE FINDER</h2>
              <p className="text-gray-600 text-xs md:text-sm mb-1.5">
                Discover your new favourite scents!
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-md font-semibold text-xs flex items-center gap-1 transition shadow-sm">
                Take the Quiz
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="relative h-12 md:h-16 flex items-center justify-center">
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Perfume Bottles on white risers */}
                <div className="absolute bottom-1 flex items-end gap-1">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-5 bg-pink-300 rounded-t shadow-sm"></div>
                    <div className="w-5 h-0.5 bg-white rounded mt-0.5"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4.5 h-7 bg-black rounded-t shadow-sm"></div>
                    <div className="w-6 h-0.5 bg-white rounded mt-0.5"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-6 bg-blue-300 rounded-t shadow-sm"></div>
                    <div className="w-5 h-0.5 bg-white rounded mt-0.5"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-5 bg-white border border-gray-300 rounded-t shadow-sm"></div>
                    <div className="w-5 h-0.5 bg-white rounded mt-0.5"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-5.5 bg-pink-200 rounded-t shadow-sm"></div>
                    <div className="w-5 h-0.5 bg-white rounded mt-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lipstick Finder Banner */}
      <section className="container mx-auto px-2 md:px-4 py-1.5 md:py-2 max-w-full overflow-hidden w-full">
        <div className="bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50 rounded-xl overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-2 items-center p-2 md:p-3">
            <div className="z-10">
              <h2 className="text-base md:text-lg font-bold text-pink-700 mb-0.5 uppercase tracking-tight">LIPSTICK FINDER</h2>
              <p className="text-gray-600 text-xs md:text-sm mb-1.5">
                Discover the perfect shade for you!
              </p>
              <button className="bg-red-800 hover:bg-red-900 text-white px-3 py-1.5 rounded-md font-semibold text-xs flex items-center gap-1 transition shadow-sm">
                Take the Quiz
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="relative h-12 md:h-16 flex items-center justify-center">
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Gold tiered stand */}
                <div className="absolute bottom-0 w-36 md:w-40 h-1.5 bg-gradient-to-t from-yellow-600 to-yellow-500 rounded-t shadow-sm"></div>
                {/* Lipstick Display on stand */}
                <div className="absolute bottom-1.5 flex items-end gap-0.5">
                  {/* Traditional lipstick tubes */}
                  <div className="w-2.5 h-5 bg-red-600 rounded-t shadow-sm"></div>
                  <div className="w-2.5 h-4.5 bg-red-500 rounded-t shadow-sm"></div>
                  <div className="w-2.5 h-5 bg-red-700 rounded-t shadow-sm"></div>
                  <div className="w-2.5 h-4.75 bg-pink-400 rounded-t shadow-sm"></div>
                  <div className="w-2.5 h-4.25 bg-rose-300 rounded-t shadow-sm"></div>
                  {/* Liquid lipsticks with applicators */}
                  <div className="w-2 h-4 bg-red-800 rounded-t shadow-sm flex flex-col items-center">
                    <div className="w-1.5 h-0.5 bg-gray-400 rounded-t mt-0.5"></div>
                  </div>
                  <div className="w-2 h-4.5 bg-red-900 rounded-t shadow-sm flex flex-col items-center">
                    <div className="w-1.5 h-0.5 bg-gray-400 rounded-t mt-0.5"></div>
                  </div>
                  <div className="w-2 h-3.75 bg-red-700 rounded-t shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Card Section - Alpha Perfume */}
      <section className="container mx-auto px-2 md:px-4 py-4 md:py-6 max-w-full overflow-hidden w-full">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-row gap-4 md:gap-6 items-center p-3 md:p-6">
            {/* Product Image - Left */}
            <div className="bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden w-24 md:w-48 h-24 md:h-64">
              <img 
                src={img2721} 
                alt="Alpha Perfume"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details - Right */}
            <div className="flex-1 p-2 md:p-4 min-w-0">
              <p className="text-[10px] md:text-xs text-gray-600 font-medium uppercase mb-1 md:mb-2">EAU DE PARFUM FOR MEN</p>
              <h2 className="text-sm md:text-2xl font-bold text-gray-800 mb-2 md:mb-4 line-clamp-2">Alpha (Him) - 100ml</h2>
              
              {/* Rating Section */}
              <div className="flex items-center gap-0.5 md:gap-1 mb-2 md:mb-4">
                <svg className="w-3 h-3 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs md:text-base font-semibold text-gray-800">4.5</span>
                <svg className="w-3 h-3 md:w-5 md:h-5 text-blue-500 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] md:text-sm text-gray-600">(29 Reviews)</span>
              </div>
              
              {/* Pricing */}
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <span className="text-base md:text-3xl font-bold text-black">₹899.00</span>
                <span className="text-xs md:text-lg text-gray-500 line-through">₹1,299.00</span>
              </div>
              
              {/* Add to Cart Button - Same row as image */}
              <button 
                onClick={() => {
                  const alphaProduct = {
                    id: 12,
                    name: "Alpha (Him) - 100ml",
                    image: img2721,
                    price: "899.00",
                    originalPrice: "1299.00"
                  };
                  addToCart(alphaProduct);
                }}
                className="bg-black text-white px-3 py-1.5 md:px-6 md:py-3 rounded-md font-semibold text-xs md:text-base hover:bg-gray-800 transition inline-block"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Crazy Deals Section */}
      <section className="container mx-auto px-2 md:px-4 py-4 md:py-6 max-w-full overflow-hidden w-full">
        <div className="mb-3 md:mb-6 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase">CRAZY DEALS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
          {/* Self Care Kit */}
          <div className="bg-yellow-50 rounded-xl overflow-hidden relative p-3 shadow-md">
            <div className="flex flex-col items-center text-center">
              {/* Offer Text */}
              <div className="mb-2">
                <p className="text-[10px] text-gray-700 mb-0.5">Buy Any</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg md:text-2xl font-bold text-gray-800">12</span>
                  <span className="text-xs md:text-sm text-gray-700">for</span>
                  <span className="text-lg md:text-2xl font-bold text-gray-800">₹1298</span>
                </div>
                <p className="text-[10px] text-gray-600 mt-0.5">Only</p>
              </div>
              
              {/* Product Image */}
              <div className="bg-white rounded-xl mb-2 w-full h-24 md:h-32 overflow-hidden">
                <img 
                  src={img2723} 
                  alt="Self Care Kit"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Category Label */}
              <p className="text-[10px] font-semibold text-gray-800 uppercase">SELF CARE KIT</p>
            </div>
          </div>

          {/* Self Love Kit */}
          <div className="bg-yellow-50 rounded-xl overflow-hidden relative p-3 shadow-md">
            <div className="flex flex-col items-center text-center">
              {/* Offer Text */}
              <div className="mb-2">
                <p className="text-[10px] text-gray-700 mb-0.5">Buy Any</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg md:text-2xl font-bold text-gray-800">6</span>
                  <span className="text-xs md:text-sm text-gray-700">for</span>
                  <span className="text-lg md:text-2xl font-bold text-gray-800">₹899</span>
                </div>
                <p className="text-[10px] text-gray-600 mt-0.5">Only</p>
              </div>
              
              {/* Product Image */}
              <div className="bg-white rounded-xl mb-2 w-full h-24 md:h-32 overflow-hidden">
                <img 
                  src={img2725} 
                  alt="Self Love Kit"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Category Label */}
              <p className="text-[10px] font-semibold text-gray-800 uppercase">SELF LOVE KIT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop By Notes Section */}
      <section className="container mx-auto px-2 md:px-4 py-6 md:py-8 max-w-full overflow-hidden w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">SHOP BY NOTES</h2>
        </div>
        
        <div className="flex justify-center gap-6 md:gap-12 mb-4">
          {/* Rose */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-pink-100 flex items-center justify-center mb-2 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth="2"/>
                  <path d="M50 20 Q45 30 40 35 Q35 40 30 45 Q25 50 30 55 Q35 60 40 65 Q45 70 50 75 Q55 70 60 65 Q65 60 70 55 Q75 50 70 45 Q65 40 60 35 Q55 30 50 20" fill="#EC4899" opacity="0.8"/>
                  <path d="M50 25 Q48 30 46 33 Q44 36 42 40 Q40 44 42 48 Q44 52 46 55 Q48 58 50 62 Q52 58 54 55 Q56 52 58 48 Q60 44 58 40 Q56 36 54 33 Q52 30 50 25" fill="#F472B6"/>
                  <ellipse cx="50" cy="35" rx="8" ry="12" fill="#F9A8D4"/>
                  <path d="M40 50 Q35 55 30 60 M60 50 Q65 55 70 60" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M35 65 Q40 70 45 75 M65 65 Q60 70 55 75" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <span className="text-sm md:text-base font-semibold text-black uppercase">ROSE</span>
          </div>

          {/* Citrusy */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-100 flex items-center justify-center mb-2 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="2"/>
                  <circle cx="35" cy="40" r="12" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="2"/>
                  <circle cx="65" cy="40" r="12" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="2"/>
                  <path d="M35 40 Q30 35 25 30 Q20 25 25 20 Q30 15 35 20 Q40 25 35 30" fill="#FDE047" opacity="0.7"/>
                  <path d="M65 40 Q70 35 75 30 Q80 25 75 20 Q70 15 65 20 Q60 25 65 30" fill="#FDE047" opacity="0.7"/>
                  <path d="M30 50 Q25 55 20 60 M70 50 Q75 55 80 60" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M25 65 Q30 70 35 75 M75 65 Q70 70 65 75" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <span className="text-sm md:text-base font-semibold text-black uppercase">CITRUSY</span>
          </div>

          {/* White Floral */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-amber-50 flex items-center justify-center mb-2 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="2"/>
                  <circle cx="50" cy="35" r="8" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1.5"/>
                  <circle cx="40" cy="40" r="6" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1.5"/>
                  <circle cx="60" cy="40" r="6" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1.5"/>
                  <circle cx="35" cy="50" r="5" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1.5"/>
                  <circle cx="65" cy="50" r="5" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1.5"/>
                  <path d="M50 35 Q45 30 40 35 Q35 40 35 45 Q35 50 40 50" stroke="#FCD34D" strokeWidth="2" fill="none"/>
                  <path d="M50 35 Q55 30 60 35 Q65 40 65 45 Q65 50 60 50" stroke="#FCD34D" strokeWidth="2" fill="none"/>
                  <path d="M30 55 Q25 60 20 65 M70 55 Q75 60 80 65" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M25 70 Q30 75 35 80 M75 70 Q70 75 65 80" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <span className="text-sm md:text-base font-semibold text-black uppercase">WHITE FLORAL</span>
          </div>
        </div>

        {/* Indicator Line */}
        <div className="flex justify-center gap-6 md:gap-12 mb-2">
          <div className="w-24 md:w-32 h-1 bg-gray-800 rounded"></div>
          <div className="w-24 md:w-32 h-0.5 bg-gray-300 rounded"></div>
          <div className="w-24 md:w-32 h-0.5 bg-gray-300 rounded"></div>
        </div>
      </section>

      {/* Why Vintage Beauty Section */}
      <section className="container mx-auto px-2 md:px-4 py-6 md:py-8 max-w-full overflow-hidden w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">WHY VINTAGE BEAUTY?</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Cruelty Free */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 relative">
              <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="1.5"/>
                <path d="M50 20 Q45 25 40 30 Q35 35 30 40 Q25 45 30 50 Q35 55 40 60 Q45 65 50 70 Q55 65 60 60 Q65 55 70 50 Q75 45 70 40 Q65 35 60 30 Q55 25 50 20" stroke="#000" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="45" r="8" fill="#000"/>
                <circle cx="45" cy="50" r="3" fill="#000"/>
                <circle cx="55" cy="50" r="3" fill="#000"/>
                <path d="M45 55 Q50 58 55 55" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <circle cx="40" cy="35" r="2" fill="#000"/>
                <circle cx="60" cy="35" r="2" fill="#000"/>
                <circle cx="35" cy="50" r="2" fill="#000"/>
                <circle cx="65" cy="50" r="2" fill="#000"/>
                <circle cx="40" cy="65" r="2" fill="#000"/>
                <circle cx="60" cy="65" r="2" fill="#000"/>
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-bold text-black uppercase mb-2">CRUELTY FREE</h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              Kindness in every bottle: Our commitment to cruelty-free Products.
            </p>
          </div>

          {/* Fragrance Forward */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 relative">
              <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="1.5"/>
                <rect x="40" y="25" width="20" height="35" rx="2" stroke="#000" strokeWidth="2" fill="none"/>
                <rect x="45" y="30" width="10" height="8" rx="1" stroke="#000" strokeWidth="1.5" fill="none"/>
                <path d="M50 60 L50 70" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M50 70 L45 75 M50 70 L55 75" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M35 35 Q30 30 25 25 M65 35 Q70 30 75 25" stroke="#000" strokeWidth="1.5" fill="none"/>
                <path d="M35 40 Q30 45 25 50 M65 40 Q70 45 75 50" stroke="#000" strokeWidth="1.5" fill="none"/>
                <circle cx="30" cy="30" r="2" fill="#000"/>
                <circle cx="70" cy="30" r="2" fill="#000"/>
                <circle cx="25" cy="45" r="2" fill="#000"/>
                <circle cx="75" cy="45" r="2" fill="#000"/>
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-bold text-black uppercase mb-2">FRAGRANCE FORWARD</h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              Luxurious & imported perfume oils in every product
            </p>
          </div>

          {/* Affordable Luxury */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 relative">
              <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="1.5"/>
                <rect x="35" y="40" width="30" height="20" rx="3" stroke="#000" strokeWidth="2" fill="none"/>
                <rect x="40" y="45" width="20" height="10" rx="1" stroke="#000" strokeWidth="1.5" fill="none"/>
                <path d="M45 50 L55 50" stroke="#000" strokeWidth="1.5"/>
                <path d="M50 60 L50 70" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="50" cy="30" r="2" fill="#000"/>
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-bold text-black uppercase mb-2">AFFORDABLE LUXURY</h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              Offering Premium Quality and Elegance at a
            </p>
          </div>

          {/* Gender Neutral */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 relative">
              <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="1.5"/>
                <circle cx="50" cy="50" r="20" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M50 30 L50 50 M50 50 L65 45 M50 50 L35 55" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M50 70 L50 50 M50 50 L35 45 M50 50 L65 55" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="30" cy="35" r="2" fill="#000"/>
                <circle cx="70" cy="35" r="2" fill="#000"/>
                <circle cx="30" cy="65" r="2" fill="#000"/>
                <circle cx="70" cy="65" r="2" fill="#000"/>
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-bold text-black uppercase mb-2">GENDER NEUTRAL</h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              Elevate your self-care routine with bath, body and
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="container mx-auto px-2 md:px-4 py-6 md:py-8 max-w-full overflow-hidden w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">WHAT OUR CUSTOMERS HAVE TO SAY</h2>
        </div>

        <div className="flex flex-col items-center">
          {/* Profile Pictures Carousel */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 relative">
            {/* Left Profile (Previous) */}
            {currentTestimonial > 0 && (
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden opacity-40 cursor-pointer transition-all hover:opacity-60"
                onClick={() => setCurrentTestimonial(currentTestimonial - 1)}
              >
                <img 
                  src={testimonials[currentTestimonial - 1].image} 
                  alt={testimonials[currentTestimonial - 1].name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {currentTestimonial === 0 && (
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden opacity-40 cursor-pointer transition-all hover:opacity-60"
                onClick={() => setCurrentTestimonial(testimonials.length - 1)}
              >
                <img 
                  src={testimonials[testimonials.length - 1].image} 
                  alt={testimonials[testimonials.length - 1].name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Central Profile (Active) */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Profile (Next) */}
            {currentTestimonial < testimonials.length - 1 && (
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden opacity-40 cursor-pointer transition-all hover:opacity-60"
                onClick={() => setCurrentTestimonial(currentTestimonial + 1)}
              >
                <img 
                  src={testimonials[currentTestimonial + 1].image} 
                  alt={testimonials[currentTestimonial + 1].name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {currentTestimonial === testimonials.length - 1 && (
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden opacity-40 cursor-pointer transition-all hover:opacity-60"
                onClick={() => setCurrentTestimonial(0)}
              >
                <img 
                  src={testimonials[0].image} 
                  alt={testimonials[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          {/* Testimonial Text */}
          <div className="text-center mb-4 max-w-2xl mx-auto">
            {testimonials[currentTestimonial].review.map((line, index) => (
              <p key={index} className="text-sm md:text-base text-gray-800 mb-1">
                {line}
              </p>
            ))}
          </div>

          {/* Customer Name */}
          <p className="text-sm md:text-base text-gray-700 italic mb-2">
            - {testimonials[currentTestimonial].name}
          </p>

          {/* Instagram Handle */}
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-sm md:text-base text-gray-700">{testimonials[currentTestimonial].instagram}</span>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentTestimonial ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 overflow-y-auto shadow-2xl transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close Button */}
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition z-10"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Top Section - User Profile & Cashback */}
            <div className="px-4 pt-16 pb-4">
              {/* MY ORDERS & TRACK ORDER Buttons */}
              <div className="flex gap-2 mb-4">
                <Link
                  to="/orders"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-sm font-bold text-gray-800">MY ORDERS</span>
                </Link>
                <Link
                  to="/orders"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <span className="text-sm font-bold text-gray-800">TRACK ORDER</span>
                </Link>
              </div>

              {/* Category Shortcuts - Circular Icons */}
              <div className="flex gap-3 justify-center">
                {/* PERFUMES */}
                <Link to="/category/perfumes" onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center overflow-hidden shadow-md">
                    <img 
                      src={img2711} 
                      alt="Perfumes"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-800 mt-1">PERFUMES</span>
                  <span className="text-[10px] text-gray-500">VINTAGE BEAUTY</span>
                </Link>

                {/* COSMETICS */}
                <Link to="/category/cosmetics" onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden shadow-md">
                    <img 
                      src={img2711} 
                      alt="Cosmetics"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-800 mt-1">COSMETICS</span>
                  <span className="text-[10px] text-gray-500">VINTAGE BEAUTY</span>
                </Link>

                {/* SKINCARE */}
                <Link to="/category/skincare" onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden shadow-md">
                    <img 
                      src={img2711} 
                      alt="Skincare"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-800 mt-1">SKINCARE</span>
                </Link>
              </div>
            </div>

            {/* Promotional Banner - Zodiac Collection */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4 m-4 rounded-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-20 rounded-lg overflow-hidden">
                    <img 
                      src={img2711} 
                      alt="Zodiac Collection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-yellow-400 font-bold text-lg">Zodiac Collection</h3>
                    <p className="text-white text-xs mt-1">Your Zodiac Fragrance Match Is Here</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Main Menu List */}
            <div className="bg-white pb-4">
              {/* CRAZY DEALS */}
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-5m-5 5h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">CRAZY DEALS</span>
                <span className="text-base md:text-lg">🔥</span>
              </button>

              {/* SHOP ALL */}
              <Link to="/shop-all" className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">SHOP ALL</span>
              </Link>

              {/* CATEGORIES - Dropdown */}
              <div>
                <button 
                  onClick={() => setIsSidebarCategoriesOpen(!isSidebarCategoriesOpen)}
                  className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">CATEGORIES</span>
                  <svg 
                    className={`w-4 h-4 md:w-5 md:h-5 text-gray-400 transition-transform duration-200 ${isSidebarCategoriesOpen ? 'rotate-90' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Categories Dropdown List */}
                {isSidebarCategoriesOpen && (
                  <div className="bg-gray-50 pl-4 md:pl-6">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.slug}`}
                        onClick={() => {
                          setIsSidebarOpen(false);
                          setIsSidebarCategoriesOpen(false);
                        }}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* BESTSELLERS */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">BESTSELLERS</span>
              </button>

              {/* PERFUMES */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">PERFUMES</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* BATH & BODY */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">BATH & BODY</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* COSMETICS */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">COSMETICS</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* SKINCARE */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">SKINCARE</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* SPECIAL GIFTINGS */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">SPECIAL GIFTINGS</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* FRAGRANCE FINDER */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">FRAGRANCE FINDER</span>
                <span className="text-gray-600 font-bold text-sm md:text-base">?</span>
              </button>

              {/* LIPSTICK FINDER */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">LIPSTICK FINDER</span>
                <span className="text-gray-600 font-bold text-sm md:text-base">?</span>
              </button>

              {/* PERSONALISED PERFUMES */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">PERSONALISED PERFUMES</span>
              </button>
            </div>
          </div>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[100] shadow-lg w-full max-w-full">
        <div className="flex items-center justify-around py-2 w-full max-w-full">
          <button onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </button>
          <Link to="/shop-all" onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs font-medium">Shop All</span>
          </Link>
          <Link to="/crazy-deals" onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="text-xs font-medium">Crazy Deals</span>
          </Link>
          <Link to="/account" onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-medium">Account</span>
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 overflow-y-auto shadow-2xl transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close Button */}
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition z-10"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Top Section - User Profile & Cashback */}
            <div className="px-4 pt-16 pb-4">
              {/* MY ORDERS & TRACK ORDER Buttons */}
              <div className="flex gap-2 mb-4">
                <Link
                  to="/orders"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-sm font-bold text-gray-800">MY ORDERS</span>
                </Link>
                <Link
                  to="/orders"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <span className="text-sm font-bold text-gray-800">TRACK ORDER</span>
                </Link>
              </div>

              {/* Category Shortcuts - Circular Icons */}
              <div className="flex gap-3 justify-center">
                {/* PERFUMES */}
                <Link to="/category/perfumes" onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center overflow-hidden shadow-md">
                    <img 
                      src={img2711} 
                      alt="Perfumes"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-800 mt-1">PERFUMES</span>
                  <span className="text-[10px] text-gray-500">VINTAGE BEAUTY</span>
                </Link>

                {/* COSMETICS */}
                <Link to="/category/cosmetics" onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden shadow-md">
                    <img 
                      src={img2711} 
                      alt="Cosmetics"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-800 mt-1">COSMETICS</span>
                  <span className="text-[10px] text-gray-500">VINTAGE BEAUTY</span>
                </Link>

                {/* SKINCARE */}
                <Link to="/category/skincare" onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden shadow-md">
                    <img 
                      src={img2711} 
                      alt="Skincare"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-800 mt-1">SKINCARE</span>
                </Link>
              </div>
            </div>

            {/* Promotional Banner - Zodiac Collection */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4 m-4 rounded-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-20 rounded-lg overflow-hidden">
                    <img 
                      src={img2711} 
                      alt="Zodiac Collection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-yellow-400 font-bold text-lg">Zodiac Collection</h3>
                    <p className="text-white text-xs mt-1">Your Zodiac Fragrance Match Is Here</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Main Menu List */}
            <div className="bg-white pb-4">
              {/* CRAZY DEALS */}
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-5m-5 5h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">CRAZY DEALS</span>
                <span className="text-base md:text-lg">🔥</span>
              </button>

              {/* SHOP ALL */}
              <Link to="/shop-all" className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">SHOP ALL</span>
              </Link>

              {/* CATEGORIES - Dropdown */}
              <div>
                <button 
                  onClick={() => setIsSidebarCategoriesOpen(!isSidebarCategoriesOpen)}
                  className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">CATEGORIES</span>
                  <svg 
                    className={`w-4 h-4 md:w-5 md:h-5 text-gray-400 transition-transform duration-200 ${isSidebarCategoriesOpen ? 'rotate-90' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Categories Dropdown List */}
                {isSidebarCategoriesOpen && (
                  <div className="bg-gray-50 pl-4 md:pl-6">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.slug}`}
                        onClick={() => {
                          setIsSidebarOpen(false);
                          setIsSidebarCategoriesOpen(false);
                        }}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* BESTSELLERS */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">BESTSELLERS</span>
              </button>

              {/* PERFUMES */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">PERFUMES</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* BATH & BODY */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">BATH & BODY</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* COSMETICS */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">COSMETICS</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* SKINCARE */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">SKINCARE</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* SPECIAL GIFTINGS */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">SPECIAL GIFTINGS</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* FRAGRANCE FINDER */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">FRAGRANCE FINDER</span>
                <span className="text-gray-600 font-bold text-sm md:text-base">?</span>
              </button>

              {/* LIPSTICK FINDER */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">LIPSTICK FINDER</span>
                <span className="text-gray-600 font-bold text-sm md:text-base">?</span>
              </button>

              {/* PERSONALISED PERFUMES */}
              <button className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span className="flex-1 text-left text-xs md:text-sm font-semibold text-black">PERSONALISED PERFUMES</span>
              </button>
            </div>
          </div>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[100] shadow-lg w-full max-w-full">
        <div className="flex items-center justify-around py-2 w-full max-w-full">
          <button onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </button>
          <Link to="/shop-all" onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs font-medium">Shop All</span>
          </Link>
          <Link to="/crazy-deals" onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="text-xs font-medium">Crazy Deals</span>
          </Link>
          <Link to="/account" onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-medium">Account</span>
          </Link>
        </div>
      </nav>

      {/* Cart Slide */}
      {false && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsCartOpen(false)}
          ></div>
          
          {/* Cart Slide */}
          <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl overflow-y-auto animate-slide-in-right">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-black uppercase">CART</h2>
                  <span className="text-sm text-orange-600 font-semibold">ORDERS</span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Banner */}
              <div className="bg-orange-100 px-4 py-2">
                <p className="text-xs font-semibold text-orange-800">FLAT 5% OFF ON ALL PREPAID ORDERS</p>
              </div>
            </div>

            {/* Cart Content */}
            <div className="p-4">
              {useCartStore.getState().items.length === 0 ? (
                <>
                  {/* Empty Cart Message */}
                  <div className="text-center py-8">
                    <p className="text-xl font-bold text-black mb-6">Your cart is currently empty</p>
                    
                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col gap-3 mb-8">
                      <button className="w-full border-2 border-black text-black bg-white py-3 rounded-md font-semibold hover:bg-gray-50 transition">
                        BESTSELLERS
                      </button>
                      <button className="w-full border-2 border-black text-black bg-white py-3 rounded-md font-semibold hover:bg-gray-50 transition">
                        NEW ARRIVALS
                      </button>
                      <button className="w-full border-2 border-black text-black bg-white py-3 rounded-md font-semibold hover:bg-gray-50 transition">
                        ALL PERFUMES
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300 my-6"></div>

                    {/* You May Also Like Section */}
                    <div className="text-left mb-4">
                      <h3 className="text-lg font-bold text-black uppercase">YOU MAY ALSO LIKE</h3>
                    </div>

                    {/* Recommended Products */}
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" style={{ maxWidth: '100%' }}>
                      {recommendedProducts.map((product) => (
                        <div key={product.id} className="flex-shrink-0 w-40 bg-white border border-gray-200 rounded-xl overflow-hidden relative">
                          <div className="w-full h-40 bg-gray-50 overflow-hidden relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                            {/* Wishlist Heart Icon */}
                            <button
                              onClick={(e) => handleWishlistToggle(product, e)}
                              className={`absolute top-2 right-2 p-1.5 rounded-full transition-colors z-20 ${
                                isInWishlist(product.id)
                                  ? 'bg-red-500 text-white' 
                                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                              }`}
                            >
                              <svg className="w-4 h-4" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                          <div className="p-3">
                            <h4 className="text-sm font-semibold text-gray-800 mb-2">{product.name}</h4>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-base font-bold text-black">₹{product.price}</span>
                              <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                            </div>
                            <button 
                              onClick={() => addToCart(product)}
                              className="w-full border-2 border-black text-black bg-white py-2 rounded-md font-semibold text-xs hover:bg-gray-50 transition"
                            >
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {useCartStore.getState().items.map((item) => (
                      <div key={item.id} className="flex gap-4 border-b border-gray-200 pb-4">
                        <div className="w-20 h-20 bg-gray-50 rounded-xl flex-shrink-0 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-800 mb-1">{item.name}</h4>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-base font-bold text-black">₹{item.price}</span>
                            {item.originalPrice && (
                              <span className="text-xs text-gray-500 line-through">₹{item.originalPrice}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => {
                                if (item.quantity > 1) {
                                  useCartStore.getState().updateQuantity(item.id, item.quantity - 1);
                                } else {
                                  removeFromCart(item.id);
                                }
                              }}
                              className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                            >
                              <span className="text-lg">-</span>
                            </button>
                            <span className="text-sm font-semibold">{item.quantity}</span>
                            <button 
                              onClick={() => {
                                useCartStore.getState().updateQuantity(item.id, item.quantity + 1);
                              }}
                              className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                            >
                              <span className="text-lg">+</span>
                            </button>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-red-600 text-sm hover:text-red-800"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total and Checkout */}
                  <div className="border-t border-gray-300 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-black">Total:</span>
                      <span className="text-xl font-bold text-black">
                        ₹{useCartStore.getState().getTotal().toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20 md:mt-0">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 mb-4 md:mb-8">
            {/* Company Info */}
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-4">VINTAGE BEAUTY®</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                Premium luxury fragrances crafted with passion. Discover your signature scent and embrace timeless elegance.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-2 md:gap-4 mt-3 md:mt-6">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.057-1.274-.07-1.65-.07-4.859 0-3.21.015-3.586.074-4.859.061-1.171.255-1.816.42-2.236.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.231-.421 1.275-.057 1.65-.07 4.859-.07zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.44 1.44-1.44.793-.001 1.44.645 1.44 1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-base md:text-lg font-semibold mb-2 md:mb-4">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link to="/" className="text-xs md:text-sm hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop-all" className="text-xs md:text-sm hover:text-white transition">
                    Shop All
                  </Link>
                </li>
                <li>
                  <Link to="/crazy-deals" className="text-xs md:text-sm hover:text-white transition">
                    Crazy Deals
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="text-xs md:text-sm hover:text-white transition">
                    My Account
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-white text-base md:text-lg font-semibold mb-2 md:mb-4">Categories</h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">
                    Men's Perfume
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">
                    Women's Perfume
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">
                    Unisex Fragrances
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">
                    Gift Sets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-white text-base md:text-lg font-semibold mb-2 md:mb-4">Stay Connected</h4>
              <div className="space-y-2 md:space-y-4 mb-4 md:mb-6">
                <div className="flex items-start gap-2 md:gap-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-xs md:text-sm font-medium">Email</p>
                    <a href="mailto:support@vintagebeauty.com" className="text-xs md:text-sm hover:text-white transition break-all">
                      support@vintagebeauty.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-xs md:text-sm font-medium">Phone</p>
                    <a href="tel:+911234567890" className="text-xs md:text-sm hover:text-white transition">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-xs md:text-sm font-medium">Address</p>
                    <p className="text-xs md:text-sm">123 Fashion Street, Mumbai, India 400001</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-4 md:mt-6">
                <p className="text-xs md:text-sm font-medium mb-2 md:mb-3">Subscribe to Newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 text-xs md:text-sm"
                  />
                  <button className="px-3 md:px-6 py-1.5 md:py-2 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition text-xs md:text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods & Policies */}
          <div className="border-t border-gray-800 pt-4 md:pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
              {/* Payment Methods */}
              <div>
                <h5 className="text-white text-sm md:text-base font-semibold mb-2 md:mb-4">We Accept</h5>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <div className="w-10 h-6 md:w-12 md:h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-800">VISA</span>
                  </div>
                  <div className="w-10 h-6 md:w-12 md:h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-800">MC</span>
                  </div>
                  <div className="w-10 h-6 md:w-12 md:h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-800">UPI</span>
                  </div>
                  <div className="w-10 h-6 md:w-12 md:h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-800">GPay</span>
                  </div>
                  <div className="w-10 h-6 md:w-12 md:h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-bold text-gray-800">Paytm</span>
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div>
                <h5 className="text-white text-sm md:text-base font-semibold mb-2 md:mb-4">Policies</h5>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">Privacy Policy</a>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">Terms & Conditions</a>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">Shipping Policy</a>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">Return Policy</a>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">Refund Policy</a>
                  <a href="#" className="text-xs md:text-sm hover:text-white transition">FAQ</a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-4 md:pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
              <p className="text-xs md:text-sm text-center md:text-left">
                © {new Date().getFullYear()} VINTAGE BEAUTY®. All rights reserved.
              </p>
              <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
                <a href="#" className="hover:text-white transition">Privacy</a>
                <a href="#" className="hover:text-white transition">Terms</a>
                <a href="#" className="hover:text-white transition">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

