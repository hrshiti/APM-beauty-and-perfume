import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images from assets vintage folder
import img2616 from '../assets/images vintage/1.jpg';
import img2617 from '../assets/images vintage/2.jpg';
import img2618 from '../assets/images vintage/3.jpg';
import img2619 from '../assets/images vintage/4.jpg';
import img2638 from '../assets/images vintage/5.jpg';
import img2645 from '../assets/images vintage/6.jpg';
import img2648 from '../assets/images vintage/7.jpg';
import img2651 from '../assets/images vintage/8-222.jpg';
import img2653 from '../assets/images vintage/2_1.jpg';
import img2657 from '../assets/images vintage/3_1.jpg';
import img2669 from '../assets/images vintage/4_1.jpg';
import img2698 from '../assets/images vintage/5_1.jpg';
import img2700 from '../assets/images vintage/4----2.jpg';
import img2702 from '../assets/images vintage/IMG_6487.jpg';
import img2703 from '../assets/images vintage/IMG_6503.jpg';
import img2705 from '../assets/images vintage/IMG_9720.JPG';
import img2707 from '../assets/images vintage/1.jpg';
import img2709 from '../assets/images vintage/2.jpg';
import img2711 from '../assets/images vintage/3.jpg';
import img2719 from '../assets/images vintage/4.jpg';
import img2721 from '../assets/images vintage/5.jpg';
import img2723 from '../assets/images vintage/6.jpg';
import img2725 from '../assets/images vintage/7.jpg';
import img2727 from '../assets/images vintage/8-222.jpg';
import img2728 from '../assets/images vintage/2_1.jpg';
import img2732 from '../assets/images vintage/3_1.jpg';

const ShopAll = () => {
  const [activeTab, setActiveTab] = useState('SHOP ALL');

  // All products
  const allProducts = [
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
    },
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
    },
    {
      id: 9,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Royal Oud",
      tag: "LUXURY",
      discount: "45% OFF",
      image: img2705,
      rating: 4.9,
      reviews: 2100,
      price: "1999.00",
      originalPrice: "3599.00"
    },
    {
      id: 10,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Platinum",
      tag: "LUXURY",
      discount: "40% OFF",
      image: img2707,
      rating: 4.8,
      reviews: 1800,
      price: "1799.00",
      originalPrice: "2999.00"
    },
    {
      id: 11,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Diamond",
      tag: "LUXURY",
      discount: "42% OFF",
      image: img2709,
      rating: 4.9,
      reviews: 1650,
      price: "2199.00",
      originalPrice: "3799.00"
    },
    {
      id: 12,
      category: "EAU DE PARFUM",
      name: "VINTAGE BEAUTY® Elite",
      tag: "LUXURY",
      discount: "38% OFF",
      image: img2711,
      rating: 4.7,
      reviews: 1400,
      price: "1699.00",
      originalPrice: "2799.00"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 safe-area-inset-bottom overflow-x-hidden max-w-full">
      {/* Top Black Header - Promotional Carousel */}
      <div className="bg-black text-white py-2 relative overflow-hidden">
        <div className="flex items-center justify-center relative">
          <div className="text-xs md:text-sm font-medium text-center px-8 md:px-12">
            FLAT 5% OFF ON ALL PREPAID ORDERS
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="p-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>

            <div className="flex-1 text-center">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">VINTAGE BEAUTY®</h1>
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

      {/* Shop All Page Content */}
      <div className="container mx-auto px-4 py-4 md:py-6">
        {/* Tabs Row */}
        <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
          {/* SHOP ALL Tab - Active */}
          <button
            onClick={() => setActiveTab('SHOP ALL')}
            className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition ${
              activeTab === 'SHOP ALL'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>SHOP ALL</span>
          </button>

          {/* CRAZY DEALS Tab */}
          <Link
            to="/crazy-deals"
            className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition bg-gray-100 text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>CRAZY DEALS</span>
          </Link>

          {/* BESTSELLERS Tab */}
          <button
            onClick={() => setActiveTab('BESTSELLERS')}
            className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition ${
              activeTab === 'BESTSELLERS'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>BESTSELLERS</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">SHOP ALL</h1>
        </div>

        {/* Products Grid */}
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {allProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition">
                  {/* Category Label */}
                  <div className="px-3 pt-3 pb-1">
                    <p className="text-xs text-gray-600 font-medium uppercase">{product.category}</p>
                  </div>
                  
                  {/* Product Image Container */}
                  <div className="relative px-3 pb-2">
                    <div className="relative w-full h-48 md:h-56 bg-gray-50 rounded-xl overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* BESTSELLER Badge - Top Left */}
                      {product.tag && (
                        <span className="absolute top-2 left-2 bg-amber-700 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                          {product.tag}
                        </span>
                      )}
                      
                      {/* Discount Badge - Bottom Left */}
                      {product.discount && (
                        <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                          {product.discount}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="px-3 pb-3">
                    {/* Product Name */}
                    <h3 className="font-semibold text-sm text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
                      {product.name}
                    </h3>
                    
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
                    <button className="w-full bg-black text-white py-2.5 rounded-md font-semibold text-sm hover:bg-gray-800 transition">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>

          {/* VIEW ALL Button */}
          <div className="flex justify-center mt-6 md:mt-8">
            <button className="border-2 border-black text-black bg-white px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[100] shadow-lg">
        <div className="flex items-center justify-around py-2">
          <Link to="/" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link to="/shop-all" className="flex flex-col items-center gap-1 py-2 px-4 text-purple-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs font-medium">Shop All</span>
          </Link>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium">Crazy Deals</span>
          </button>
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

export default ShopAll;
