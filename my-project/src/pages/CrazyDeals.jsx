import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images from assets vintage folder
import img2725 from '../assets/images vintage/1.jpg';

const CrazyDeals = () => {
  const [activeTab, setActiveTab] = useState('CRAZY DEALS');
  const [currentOffer, setCurrentOffer] = useState(0);

  // Promotional offers for top banner
  const offers = [
    "Any 2 100ml PERFUMES for ₹94!",
    "FLAT 5% OFF ON ALL PREPAID ORDERS",
    "FREE SHIPPING ON ORDERS ABOVE ₹999"
  ];

  // Bundle cards data
  const bundleCards = [
    {
      id: 1,
      dealHighlight: "Buy Any 3 for ₹1298 Only",
      title: "Ultimate Perfume Box",
      description: "Buy any 3 perfumes",
      currentPrice: "₹1,298",
      originalPrice: "₹2,997",
      discount: "↓57%",
      image: img2725
    },
    {
      id: 2,
      dealHighlight: "Buy Any 6 for ₹1298 Only",
      title: "The Self Love Kit",
      description: "Buy any 6 products",
      currentPrice: "₹1,298",
      originalPrice: "₹2,222",
      discount: "↓42%",
      image: img2725
    },
    {
      id: 3,
      dealHighlight: "Buy Any 3 for ₹999 Only",
      title: "Scent Shower Combo",
      description: "Buy any 3 products",
      currentPrice: "₹999",
      originalPrice: "₹2,222",
      discount: "↓55%",
      image: img2725
    },
    {
      id: 4,
      dealHighlight: "Buy Any 3 for ₹999 Only",
      title: "Sibling Combo",
      description: "Buy any 3 products",
      currentPrice: "₹999",
      originalPrice: "₹2,222",
      discount: "↓55%",
      image: img2725
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 safe-area-inset-bottom overflow-x-hidden max-w-full">
      {/* Top Navbar - Only visible in webview - Fixed */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-[100] w-full max-w-full">
        <div className="container mx-auto px-6 py-4 max-w-full w-full">
          <div className="flex items-center justify-between">
            {/* Left side - Logo */}
            <div className="flex-1 flex items-center">
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
                <div className="relative group">
                  <button className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200 flex items-center gap-1">
                    Categories
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <Link to="/account" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                  Account
                </Link>
              </div>
            </div>

            {/* Right side - Search, Support, Cart */}
            <div className="flex-1 flex items-center justify-end gap-6">
              {/* Search */}
              <button className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Support */}
              <a href="tel:+919876543210" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Support</span>
              </a>
              
              {/* Cart */}
              <button className="relative text-gray-700 hover:text-purple-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Top Promotional Banner */}
      <div className="bg-black text-white py-2 relative overflow-hidden md:pt-[73px]">
        <div className="flex items-center justify-between px-4">
          <button 
            onClick={() => setCurrentOffer((prev) => (prev === 0 ? offers.length - 1 : prev - 1))}
            className="p-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex-1 text-center">
            <div className="text-xs md:text-sm font-medium">
              {offers[currentOffer]}
            </div>
            <div className="text-[10px] text-gray-400 mt-0.5">
              {currentOffer + 1} / {offers.length}
            </div>
          </div>
          
          <button 
            onClick={() => setCurrentOffer((prev) => (prev === offers.length - 1 ? 0 : prev + 1))}
            className="p-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 w-full max-w-full md:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button className="p-2" onClick={() => {/* Handle menu */}}>
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex-1 text-center">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">VINTAGE BEAUTY</h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 relative">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-1.5 md:gap-2">
            {/* CRAZY DEALS Tab - Active */}
            <button
              onClick={() => setActiveTab('CRAZY DEALS')}
              className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition bg-black text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>CRAZY DEALS</span>
            </button>

            {/* SHOP ALL Tab */}
            <Link
              to="/shop-all"
              className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition bg-gray-100 text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>SHOP ALL</span>
            </Link>

            {/* BESTSELLERS Tab */}
            <button
              onClick={() => setActiveTab('BESTSELLERS')}
              className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition bg-gray-100 text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>BESTSELLERS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Crazy Deals Content */}
      <div className="container mx-auto px-4 py-4 md:py-6">
        {/* Section Heading */}
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Crazy Deals</h1>
        </div>

        {/* Bundle Cards Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {bundleCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 rounded-xl overflow-hidden relative p-3 md:p-4 shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                {/* Deal Highlight */}
                <div className="mb-2 md:mb-3">
                  <p className="text-[10px] md:text-xs text-gray-800 font-bold leading-tight">{card.dealHighlight}</p>
                </div>
                
                {/* Product Image Container with Golden Pedestal */}
                <div className="relative mb-2 md:mb-3 w-full flex items-center justify-center">
                  {/* Golden Circular Pedestal */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28">
                    {/* Golden base circle */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-full shadow-lg"></div>
                    {/* Products on pedestal */}
                    <div className="absolute inset-2 overflow-hidden rounded-full">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xs md:text-sm font-bold text-gray-800 mb-0.5">{card.title}</h3>
                
                {/* Description */}
                <p className="text-[10px] md:text-xs text-gray-600 mb-2">{card.description}</p>
                
                {/* Pricing */}
                <div className="mb-2 md:mb-3">
                  <div className="flex items-baseline justify-center gap-1.5 mb-0.5">
                    <span className="text-sm md:text-base font-bold text-black">{card.currentPrice}</span>
                    <span className="text-[10px] md:text-xs text-gray-500 line-through">{card.originalPrice}</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-green-600 font-semibold">{card.discount}</p>
                </div>
                
                {/* Build Your Box Button */}
                <button className="w-full border-2 border-black text-black bg-white px-3 py-1.5 md:py-2 rounded-md text-[10px] md:text-xs font-semibold hover:bg-gray-50 transition">
                  Build Your Box
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {/* Floating WhatsApp Icon */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-8 right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-[90] hover:bg-green-600 transition"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[100] shadow-lg">
        <div className="flex items-center justify-around py-2">
          <Link to="/" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link to="/shop-all" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs font-medium">Shop All</span>
          </Link>
          <Link to="/crazy-deals" className="flex flex-col items-center gap-1 py-2 px-4 text-green-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="text-xs font-medium">Crazy Deals</span>
          </Link>
          <Link to="/account" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-medium">Account</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default CrazyDeals;

