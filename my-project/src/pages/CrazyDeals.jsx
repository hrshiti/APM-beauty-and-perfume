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
      {/* Top Promotional Banner */}
      <div className="bg-black text-white py-2 relative overflow-hidden">
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
      <header className="bg-white shadow-sm sticky top-0 z-50">
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

