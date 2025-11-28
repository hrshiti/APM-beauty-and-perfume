import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import BottomNavbar from './BottomNavbar';
import logo from '../assets/logo vintage.png';
import heroimg from '../assets/heroimg.png';
// Import product images from assets
import img1 from '../assets/images vintage/1.jpg';
import img2 from '../assets/images vintage/2.jpg';
import img3 from '../assets/images vintage/3.jpg';
import img4 from '../assets/images vintage/4.jpg';
import img5 from '../assets/images vintage/5.jpg';
import img6 from '../assets/images vintage/6.jpg';
import img7 from '../assets/images vintage/7.jpg';
import img8 from '../assets/images vintage/8-222.jpg';
// Import structured product data
import { perfumes, roomSprays, otherProducts, categories as categoryData } from '../data/productsData';

const Home = () => {
  const navigate = useNavigate();
  const { getItemCount } = useCartStore();
  const [activeCategory, setActiveCategory] = useState('Perfume');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = getItemCount();

  const categories = ['Perfume', 'Room Spray', 'Pocket Perfume', 'After Shave', 'Gift Set'];

  // Map actual products to available images
  const productImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  
  // Get products based on active category
  const getProductsByCategory = () => {
    let categoryProducts = [];
    
    switch(activeCategory) {
      case 'Perfume':
        categoryProducts = perfumes;
        break;
      case 'Room Spray':
        categoryProducts = roomSprays;
        break;
      case 'Pocket Perfume':
        categoryProducts = otherProducts.filter(p => p.category === 'pocket-perfume');
        break;
      case 'After Shave':
        categoryProducts = otherProducts.filter(p => p.category === 'after-shave');
        break;
      case 'Gift Set':
        categoryProducts = otherProducts.filter(p => p.category === 'gift-set');
        break;
      default:
        categoryProducts = perfumes;
    }
    
    return categoryProducts.slice(0, 8).map((product, index) => ({
      ...product,
      image: productImages[index % productImages.length] || img1,
      price: product.price ? `₹${product.price}` : (product.sizes?.[2]?.price ? `₹${product.sizes[2].price}` : '₹699'),
      description: product.description || product.scentProfile || 'Premium product from Vintage Beauty',
    }));
  };
  
  const products = getProductsByCategory();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden md:overflow-x-visible pb-20 md:pb-0">
      {/* Navigation Bar */}
      <nav className="w-full bg-black border-b border-gray-800">
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
                  alt="THE PERFUME Logo" 
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

      {/* Category Navigation */}
      <div className="w-full bg-black overflow-x-auto scrollbar-hide">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-6 md:gap-8 py-3 md:py-4 min-w-max md:min-w-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm md:text-base font-medium whitespace-nowrap transition-colors pb-2 border-b-2 ${
                  activeCategory === category
                    ? 'text-white border-[#D4AF37] font-semibold'
                    : 'text-white border-transparent hover:text-[#D4AF37]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section - Cosmetic Body Spray */}
      <section className="w-full bg-black py-6 md:py-10 lg:py-12 min-h-[250px] md:min-h-[350px] lg:min-h-[450px] flex items-center relative">
        <div className="container mx-auto px-4 md:px-6 w-full relative">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-6 w-full relative">
            {/* Left Content */}
            <div className="flex-[1.5] md:flex-[1.8] text-left flex flex-col justify-center relative z-10">
              <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 lg:mb-5 leading-tight">
                <span className="text-white">Cosmetic </span>
                <span className="text-[#D4AF37]">
                  <span className="font-bold">Body</span> Spray
                </span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-white mb-4 md:mb-5 lg:mb-6 max-w-xl md:max-w-2xl">
                Energetic aromatic Fougere fragrance for all the ways you play.
              </p>
              <button className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 text-white px-6 md:px-8 py-2.5 md:py-3 lg:py-3.5 rounded-lg text-sm md:text-base lg:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 border border-gray-700 w-fit">
                Shop Now
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-end mr-0 md:mr-4 items-center h-full relative">
              <div className="relative h-full flex items-center">
                <img
                  src={heroimg}
                  alt="Cosmetic Body Spray"
                  className="absolute -right-26 max-w-2xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl h-[300px] md:h-[450px] lg:h-[550px] object-contain drop-shadow-2xl z-[100]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Products Section */}
      <section className="w-full bg-black py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {activeCategory === 'Perfume' ? 'Dynamic Perfume' : activeCategory}
            </h3>
            <button className="text-[#D4AF37] hover:text-[#F4D03F] transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Product Cards - Horizontal Scroll */}
          <div className="overflow-x-auto pb-4 md:pb-6 scrollbar-hide">
            <div className="flex gap-3 md:gap-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="flex-shrink-0 w-36 md:w-48 lg:w-56 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
                >
                  {/* Product Image */}
                  <div className="relative h-36 md:h-48 lg:h-56 bg-gray-800 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-3 md:p-4 bg-gray-900">
                    {/* Name and Price in one row */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm md:text-base font-semibold text-white flex-1 truncate">
                      {product.name}
                    </h4>
                      <p className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
                      {product.price}
                    </p>
                    </div>
                    {/* Description */}
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Menu - Sliding from left */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-black z-[9999] shadow-2xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col border-r border-gray-800`}>
        <div className="overflow-y-auto flex-1">
          {/* Close Button */}
          <div className="flex justify-end p-4 border-b border-gray-800">
              <button
                onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-[#D4AF37] transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

          {/* Top Section - MY ORDERS & TRACK ORDER Buttons */}
          <div className="px-4 pt-4 pb-4">
            <div className="flex gap-2 mb-4">
              <button className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition cursor-pointer">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-sm font-bold text-white">MY ORDERS</span>
              </button>
              <button className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span className="text-sm font-bold text-white">TRACK ORDER</span>
              </button>
            </div>

            {/* Category Shortcuts - Circular Icons */}
            <div className="flex gap-3 justify-center">
              {/* PERFUMES */}
              <button 
                onClick={() => {
                  setActiveCategory('Perfume');
                  setIsMenuOpen(false);
                }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center overflow-hidden shadow-md border-2 border-[#D4AF37]">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white mt-1">PERFUMES</span>
                <span className="text-[10px] text-gray-400">VINTAGE BEAUTY</span>
              </button>

              {/* ROOM SPRAY */}
              <button 
                onClick={() => {
                  setActiveCategory('Room Spray');
                  setIsMenuOpen(false);
                }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center overflow-hidden shadow-md">
                  <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white mt-1">ROOM SPRAY</span>
                <span className="text-[10px] text-gray-400">VINTAGE BEAUTY</span>
              </button>

              {/* GIFT SET */}
              <button 
                onClick={() => {
                  setActiveCategory('Gift Set');
                  setIsMenuOpen(false);
                }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-[#D4AF37] flex items-center justify-center overflow-hidden shadow-md">
                  <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white mt-1">GIFT SET</span>
              </button>
            </div>
          </div>

          {/* Main Menu List */}
          <div className="bg-black pb-4">
            {/* SHOP ALL */}
            <Link 
              to="/products"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-900 transition"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="flex-1 text-left text-sm font-semibold text-white">SHOP ALL</span>
            </Link>

            {/* CATEGORIES */}
            <div>
              <button 
                onClick={() => {
                  setActiveCategory('Perfume');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-900 transition"
              >
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="flex-1 text-left text-sm font-semibold text-white">CATEGORIES</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* PERFUMES */}
            <button 
              onClick={() => {
                setActiveCategory('Perfume');
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-900 transition"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="flex-1 text-left text-sm font-semibold text-white">PERFUMES</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* ROOM SPRAY */}
            <button 
              onClick={() => {
                setActiveCategory('Room Spray');
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-900 transition"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="flex-1 text-left text-sm font-semibold text-white">ROOM SPRAY</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* POCKET PERFUME */}
            <button 
              onClick={() => {
                setActiveCategory('Pocket Perfume');
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-900 transition"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="flex-1 text-left text-sm font-semibold text-white">POCKET PERFUME</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* AFTER SHAVE */}
            <button 
              onClick={() => {
                setActiveCategory('After Shave');
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-900 transition"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="flex-1 text-left text-sm font-semibold text-white">AFTER SHAVE</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* GIFT SET */}
            <button 
              onClick={() => {
                setActiveCategory('Gift Set');
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-900 transition"
            >
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span className="flex-1 text-left text-sm font-semibold text-white">GIFT SET</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          </div>
        </div>

      {/* Overlay - Only on mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Bottom Navigation Bar - Mobile Only */}
      <BottomNavbar />
    </div>
  );
};

export default Home;

