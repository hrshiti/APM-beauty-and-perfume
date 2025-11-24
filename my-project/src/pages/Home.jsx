import React, { useState, useEffect } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('bestsellers');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentOffer, setCurrentOffer] = useState(0);

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
      bgColor: "bg-purple-600"
    },
    {
      title: "Luxury Perfumes Collection",
      subtitle: "Discover Your Signature Scent",
      price: "₹899",
      originalPrice: "₹1299",
      buttonText: "EXPLORE NOW",
      bgColor: "bg-indigo-600"
    },
    {
      title: "New Arrivals - Limited Edition",
      subtitle: "Exclusive Fragrances",
      price: "₹1199",
      originalPrice: "₹1599",
      buttonText: "SHOP NOW",
      bgColor: "bg-pink-600"
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
      image: "https://via.placeholder.com/200x250/f5f5dc/000000?text=Gift+Set",
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
      image: "https://via.placeholder.com/200x250/000000/ffffff?text=CEO+MAN",
      rating: 4.8,
      reviews: 1100,
      price: "449.00",
      originalPrice: "899.00"
    },
    {
      id: 3,
      category: "EAU DE PARFUM",
      name: "BELLAVITA® Premium",
      tag: "BESTSELLER",
      discount: "42% OFF",
      image: "https://via.placeholder.com/200x250/d4af37/000000?text=Premium",
      rating: 4.6,
      reviews: 950,
      price: "699.00",
      originalPrice: "1199.00"
    },
    {
      id: 4,
      category: "EAU DE PARFUM",
      name: "BELLAVITA® Classic",
      tag: "BESTSELLER",
      discount: "33% OFF",
      image: "https://via.placeholder.com/200x250/8b4513/ffffff?text=Classic",
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
      name: "BELLAVITA® Fresh",
      tag: "NEW",
      discount: "38% OFF",
      image: "https://via.placeholder.com/200x250/87ceeb/000000?text=Fresh",
      rating: 4.9,
      reviews: 450,
      price: "749.00",
      originalPrice: "1199.00"
    },
    {
      id: 6,
      category: "EAU DE PARFUM",
      name: "BELLAVITA® Modern",
      tag: "NEW",
      discount: "40% OFF",
      image: "https://via.placeholder.com/200x250/ff69b4/ffffff?text=Modern",
      rating: 4.7,
      reviews: 380,
      price: "799.00",
      originalPrice: "1299.00"
    },
    {
      id: 7,
      category: "EAU DE PARFUM",
      name: "BELLAVITA® Luxe",
      tag: "NEW",
      discount: "35% OFF",
      image: "https://via.placeholder.com/200x250/9370db/ffffff?text=Luxe",
      rating: 4.8,
      reviews: 320,
      price: "999.00",
      originalPrice: "1499.00"
    },
    {
      id: 8,
      category: "EAU DE PARFUM",
      name: "BELLAVITA® Signature",
      tag: "NEW",
      discount: "30% OFF",
      image: "https://via.placeholder.com/200x250/ff6347/ffffff?text=Signature",
      rating: 4.6,
      reviews: 280,
      price: "899.00",
      originalPrice: "1299.00"
    }
  ];

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
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      {/* Top Black Header - Promotional Carousel */}
      <div className="bg-black text-white py-2 relative overflow-hidden">
        <div className="flex items-center justify-center relative">
          <button 
            className="absolute left-2 md:left-4 z-10 p-1"
            onClick={() => setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-xs md:text-sm font-medium text-center px-8 md:px-12">
            {offers[currentOffer]}
          </div>
          <button 
            className="absolute right-2 md:right-4 z-10 p-1"
            onClick={() => setCurrentOffer((prev) => (prev + 1) % offers.length)}
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
            {/* Menu Icon */}
            <button className="p-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo - Center */}
            <div className="flex-1 text-center">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">VINTAGE BEAUTY®</h1>
            </div>

            {/* Search and Cart Icons */}
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

      {/* Hero Section - Banner Carousel */}
      <section className="relative overflow-hidden">
        <div className="relative h-64 md:h-96">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              } ${banner.bgColor} flex items-center`}
            >
              <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between w-full">
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
                  <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-4xl">👤</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Banner Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
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
      </section>

      {/* Bestsellers / New Arrivals Section */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => setActiveTab('bestsellers')}
            className={`pb-3 px-4 font-semibold transition ${
              activeTab === 'bestsellers'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-400'
            }`}
          >
            BESTSELLERS
          </button>
          <button
            onClick={() => setActiveTab('newarrivals')}
            className={`pb-3 px-4 font-semibold transition ${
              activeTab === 'newarrivals'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-400'
            }`}
          >
            NEW ARRIVALS
          </button>
        </div>

        {/* Product Horizontal Scroll Row */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition flex-shrink-0 w-48 md:w-64">
              {/* Category Label */}
              <div className="px-3 pt-3 pb-1">
                <p className="text-xs text-gray-600 font-medium uppercase">{product.category}</p>
              </div>
              
              {/* Product Image Container */}
              <div className="relative px-3 pb-2">
                <div className="relative w-full h-48 md:h-56 bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
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
      </section>

      {/* Featured/Promotional Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-6 items-center p-6 md:p-12">
            <div className="text-white z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Premium Fragrance Collection</h2>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Discover our exclusive range of luxury perfumes crafted for the modern connoisseur
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  EXPLORE COLLECTION
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                  <div className="w-24 h-32 bg-white/30 rounded"></div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                  <div className="w-24 h-32 bg-white/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Categories Section */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">LUXURY CATEGORIES</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              id: 1,
              name: "COSMETICS",
              image: "https://via.placeholder.com/200x200/dc2626/ffffff?text=Lipstick",
              hasMultipleImages: false
            },
            {
              id: 2,
              name: "SKINCARE",
              image: "https://via.placeholder.com/200x200/ea580c/ffffff?text=Sunblock",
              hasMultipleImages: false
            },
            {
              id: 3,
              name: "LUXURY PERFUMES",
              image: "https://via.placeholder.com/200x200/000000/ffffff?text=Perfume",
              hasMultipleImages: false
            },
            {
              id: 4,
              name: "BATH & BODY",
              image1: "https://via.placeholder.com/100x150/ffffff/000000?text=Shower+Gel",
              image2: "https://via.placeholder.com/100x150/a855f7/ffffff?text=Body+Lotion",
              hasMultipleImages: true
            },
            {
              id: 5,
              name: "MEN'S COLLECTION",
              image: "https://via.placeholder.com/200x200/1a1a1a/ffffff?text=Men+Perfume",
              hasMultipleImages: false
            },
            {
              id: 6,
              name: "GIFT SETS",
              image: "https://via.placeholder.com/200x200/f3f4f6/000000?text=Gift+Box",
              hasMultipleImages: false
            }
          ].map((category) => (
            <div 
              key={category.id} 
              className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 md:h-56 bg-gray-100 flex items-center justify-center p-4">
                {category.hasMultipleImages ? (
                  <div className="flex items-center justify-center gap-2 w-full h-full">
                    <div className="w-24 h-32 bg-white rounded flex items-center justify-center">
                      <img 
                        src={category.image1} 
                        alt={category.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-24 h-32 bg-white rounded flex items-center justify-center">
                      <img 
                        src={category.image2} 
                        alt={category.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              
              {/* Category Name */}
              <div className="p-4 text-center">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 uppercase">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
        <div className="flex items-center justify-around py-2">
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs font-medium">Shop All</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium">Crazy Deals</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-medium">Account</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Home;

