import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { useAuthStore } from '../store/authStore';
import { getMockCategories } from '../services/mockDataService';
import { productService } from '../services/productService';
import ProductCard from '../components/product/ProductCard';
import Footer from '../components/common/Footer';
import img2711 from '../assets/images vintage/6.jpg';

const Category = () => {
  const { slug } = useParams();
  const { getItemCount, openCart } = useCartStore();
  const { getCount: getWishlistCount } = useWishlistStore();
  const { isAuthenticated, user, logout } = useAuthStore();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sortBy: ''
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCategoriesOpen, setIsSidebarCategoriesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);
  const categories = getMockCategories();
  
  const cartItemCount = getItemCount();
  const wishlistCount = getWishlistCount();

  // Promotional offers for top header
  const offers = [
    "FLAT 5% OFF ON ALL PREPAID ORDERS",
    "FREE SHIPPING ON ORDERS ABOVE ₹999",
    "BUY 2 GET 1 FREE ON SELECTED PERFUMES"
  ];

  useEffect(() => {
    fetchProducts();
  }, [slug]);

  useEffect(() => {
    if (products.length > 0) {
      applyFilters();
    }
  }, [filters]);

  // Auto-change offer every 4 seconds
  useEffect(() => {
    const offerInterval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(offerInterval);
  }, [offers.length]);


  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await productService.getProductsByCategory(slug);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...products];
    
    if (filters.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setProducts(filtered);
  };

  const categoryName = slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Category';

  return (
    <div className={`min-h-screen bg-gray-50 pb-20 md:pb-0 safe-area-inset-bottom overflow-x-hidden w-full flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-80 md:w-[calc(100%-20rem)]' : 'md:w-full'}`}>
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
            <Link to="/" className="flex items-center">
              <h1 className="text-lg font-bold text-gray-800">VINTAGE BEAUTY®</h1>
            </Link>

            {/* Right - User Icon */}
            <div className="flex items-center gap-3">
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

            {/* Right side - Support, Wishlist, Cart, User */}
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

      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            {categoryName}
          </h1>
          
          {/* Sort Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">No products found in this category</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-4">{products.length} product(s) found</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>

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
                <button className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-sm font-bold text-gray-800">MY ORDERS</span>
                </button>
                <button className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <span className="text-sm font-bold text-gray-800">TRACK ORDER</span>
                </button>
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
              <Link 
                to="/crazy-deals" 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-5m-5 5h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-black">CRAZY DEALS</span>
                <span className="text-base">🔥</span>
              </Link>

              {/* SHOP ALL */}
              <Link 
                to="/shop-all" 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-black">SHOP ALL</span>
              </Link>

              {/* CATEGORIES - Dropdown */}
              <div>
                <button 
                  onClick={() => setIsSidebarCategoriesOpen(!isSidebarCategoriesOpen)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="flex-1 text-left text-sm font-semibold text-black">CATEGORIES</span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isSidebarCategoriesOpen ? 'rotate-90' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Categories Dropdown List */}
                {isSidebarCategoriesOpen && (
                  <div className="bg-gray-50 pl-6">
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
              <Link 
                to="/shop-all?filter=bestsellers" 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-black">BESTSELLERS</span>
              </Link>

              {/* PERFUMES */}
              <Link 
                to="/category/men" 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-black">PERFUMES</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* BATH & BODY */}
              <Link 
                to="/category/bath-body" 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-black">BATH & BODY</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* COSMETICS */}
              <Link 
                to="/category/cosmetics" 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-black">COSMETICS</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* SKINCARE */}
              <Link 
                to="/category/skincare" 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-black">SKINCARE</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* SPECIAL GIFTINGS */}
              <Link 
                to="/category/gift-sets" 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-black">SPECIAL GIFTINGS</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* FRAGRANCE FINDER */}
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-black">FRAGRANCE FINDER</span>
                <span className="text-gray-600 font-bold text-base">?</span>
              </button>
            </div>
          </div>

      <Footer />
    </div>
  );
};

export default Category;

