import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  const [activeTab, setActiveTab] = useState('bestsellers');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentOffer, setCurrentOffer] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
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
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 safe-area-inset-bottom overflow-x-hidden max-w-full w-full">
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
              <button className="relative text-gray-700 hover:text-purple-600 transition-colors duration-200" onClick={() => setIsCartOpen(true)}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Top Black Header - Promotional Carousel */}
      <div className="bg-black text-white py-2 relative overflow-hidden w-full max-w-full md:pt-[73px]">
        <div className="flex items-center justify-center relative w-full max-w-full">
          <button 
            className="absolute left-2 md:left-4 z-10 p-1"
            onClick={() => setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-xs md:text-sm font-medium text-center px-8 md:px-12 w-full max-w-full">
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
      <header className="bg-white shadow-sm sticky top-0 z-50 w-full max-w-full">
        <div className="container mx-auto px-2 md:px-4 py-3 max-w-full w-full">
          <div className="flex items-center justify-between w-full max-w-full">
            {/* Menu Icon */}
            <button className="p-2" onClick={() => setIsSidebarOpen(true)}>
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
              <button className="p-2 relative" onClick={() => setIsCartOpen(true)}>
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

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

      {/* Buy Any 3 Promotional Card */}
      <section className="container mx-auto px-2 md:px-4 py-3 md:py-4 max-w-full overflow-hidden w-full">
        <div className="bg-gray-800 rounded-xl overflow-hidden relative w-full">
          {/* Top Section - Offer Text */}
          <div className="bg-gray-800 px-3 md:px-6 py-3 md:py-4 relative">
            {/* Subtle Floral Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 30 Q60 20 70 30 Q80 40 70 50 Q60 60 50 50 Q40 40 50 30" stroke="white" strokeWidth="1" fill="none"/>
                <path d="M150 30 Q160 20 170 30 Q180 40 170 50 Q160 60 150 50 Q140 40 150 30" stroke="white" strokeWidth="1" fill="none"/>
                <path d="M250 30 Q260 20 270 30 Q280 40 270 50 Q260 60 250 50 Q240 40 250 30" stroke="white" strokeWidth="1" fill="none"/>
                <path d="M350 30 Q360 20 370 30 Q380 40 370 50 Q360 60 350 50 Q340 40 350 30" stroke="white" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            
            {/* Offer Text */}
            <div className="relative z-10 text-center">
              <div className="border-t border-white/30 w-20 md:w-32 mx-auto mb-1"></div>
              <h2 className="text-lg md:text-xl font-bold text-white mb-0.5">Buy Any 3</h2>
              <div className="border-t border-white/30 w-20 md:w-32 mx-auto mb-0.5"></div>
              <p className="text-xl md:text-2xl font-bold text-white mb-0.5">for ₹1298</p>
              <div className="border-t border-white/30 w-20 md:w-32 mx-auto mb-1"></div>
              <p className="text-xs md:text-sm font-semibold text-white">Only</p>
            </div>
          </div>

          {/* Bottom Section - Perfume Bottles */}
          <div className="bg-gray-100 px-3 md:px-6 py-3 md:py-4">
            <div className="flex flex-row items-center justify-center gap-1 md:gap-2">
              {/* Left Bottle - OUD PARFUM */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-24 md:w-20 md:h-40 bg-amber-900 rounded-xl mb-1 relative shadow-lg overflow-hidden">
                  <img 
                    src={img2618} 
                    alt="OUD PARFUM"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-yellow-600 rounded-full -mt-2.5 md:-mt-3 border-2 border-yellow-500 z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-1 bg-amber-900/80 rounded-b-lg z-10">
                    <p className="text-[6px] md:text-[9px] text-white font-semibold text-center">VINTAGE BEAUTY®</p>
                    <p className="text-[4px] md:text-[7px] text-white text-center">LUXURY</p>
                  </div>
                </div>
                <p className="text-[8px] md:text-[10px] font-semibold text-gray-800 text-center">OUD PARFUM</p>
                <p className="text-[7px] md:text-[9px] text-gray-600 text-center">100 ML | 3.4 fl. oz.</p>
              </div>

              {/* Middle Bottle - CEO MAN */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-24 md:w-20 md:h-40 bg-black rounded-xl mb-1 relative shadow-lg overflow-hidden">
                  <img 
                    src={img2617} 
                    alt="CEO MAN"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-yellow-600 rounded-full -mt-2.5 md:-mt-3 border-2 border-yellow-500 z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-1 bg-black/80 rounded-b-lg z-10">
                    <p className="text-[6px] md:text-[9px] text-white font-semibold text-center">VINTAGE BEAUTY®</p>
                    <p className="text-[4px] md:text-[7px] text-white text-center">LUXURY</p>
                  </div>
                </div>
                <p className="text-[8px] md:text-[10px] font-semibold text-gray-800 text-center">CEO MAN</p>
                <p className="text-[7px] md:text-[9px] text-gray-600 text-center">EAU DE PARFUM</p>
                <p className="text-[7px] md:text-[9px] text-gray-600 text-center">100 ML | 3.4 fl. oz.</p>
              </div>

              {/* Right Bottle - GLAM WOMAN */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-24 md:w-20 md:h-40 bg-orange-200 rounded-xl mb-1 relative shadow-lg overflow-hidden">
                  <img 
                    src={img2619} 
                    alt="GLAM WOMAN"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-orange-300 rounded-full -mt-2.5 md:-mt-3 border-2 border-orange-400 z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-1 bg-orange-200/80 rounded-b-lg z-10">
                    <p className="text-[6px] md:text-[9px] text-black font-semibold text-center">VINTAGE BEAUTY®</p>
                    <p className="text-[4px] md:text-[7px] text-black text-center">LUXURY</p>
                  </div>
                </div>
                <p className="text-[8px] md:text-[10px] font-semibold text-gray-800 text-center">GLAM WOMAN</p>
                <p className="text-[7px] md:text-[9px] text-gray-600 text-center">EAU DE PARFUM</p>
                <p className="text-[7px] md:text-[9px] text-gray-600 text-center">100 ML | 3.4 fl. oz.</p>
              </div>
            </div>
          </div>
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
          ].map((category) => (
            <div 
              key={category.id} 
              className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer"
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
            </div>
          ))}
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
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 overflow-y-auto shadow-2xl animate-slide-in">
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
            <div className="bg-white p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* User Profile Icon */}
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Use <span className="font-bold">99%</span> of your <span className="font-bold">Cashback</span>
                    </p>
                    <p className="text-xs text-gray-600 mt-1">To Redeem</p>
                  </div>
                </div>
                {/* Shopping Cart Icon */}
                <button className="p-2">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* MY ORDERS & TRACK ORDER Buttons */}
            <div className="bg-white p-4 border-b border-gray-200">
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 py-3 rounded-md border border-gray-200 transition">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-sm font-semibold text-black">MY ORDERS</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 py-3 rounded-md border border-gray-200 transition">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <span className="text-sm font-semibold text-black">TRACK ORDER</span>
                </button>
              </div>
            </div>

            {/* Category Shortcuts - Circular Icons */}
            <div className="bg-white p-4 border-b border-gray-200">
              <div className="flex gap-4 justify-center">
                {/* PERFUMES */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border-2 border-gray-200 overflow-hidden">
                    <img 
                      src={img2705} 
                      alt="PERFUMES"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-black">PERFUMES</span>
                  <span className="text-xs text-gray-600">VINTAGE BEAUTY CEO</span>
                </div>
                {/* COSMETICS */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border-2 border-gray-200 overflow-hidden">
                    <img 
                      src={img2707} 
                      alt="COSMETICS"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-black">COSMETICS</span>
                  <span className="text-xs text-gray-600">VINTAGE BEAUTY</span>
                </div>
                {/* SKINCARE */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border-2 border-gray-200 overflow-hidden">
                    <img 
                      src={img2709} 
                      alt="SKINCARE"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-black">SKINCARE</span>
                </div>
              </div>
            </div>

            {/* Promotional Banner - Zodiac Collection */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 m-4 rounded-xl relative overflow-hidden">
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
        </>
      )}

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[100] shadow-lg w-full max-w-full">
        <div className="flex items-center justify-around py-2 w-full max-w-full">
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </button>
          <Link to="/shop-all" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs font-medium">Shop All</span>
          </Link>
          <Link to="/crazy-deals" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
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

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 overflow-y-auto shadow-2xl animate-slide-in">
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
            <div className="bg-white p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* User Profile Icon */}
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Use <span className="font-bold">99%</span> of your <span className="font-bold">Cashback</span>
                    </p>
                    <p className="text-xs text-gray-600 mt-1">To Redeem</p>
                  </div>
                </div>
                {/* Shopping Cart Icon */}
                <button className="p-2">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* MY ORDERS & TRACK ORDER Buttons */}
            <div className="bg-white p-4 border-b border-gray-200">
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 py-3 rounded-md border border-gray-200 transition">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-sm font-semibold text-black">MY ORDERS</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 py-3 rounded-md border border-gray-200 transition">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <span className="text-sm font-semibold text-black">TRACK ORDER</span>
                </button>
              </div>
            </div>

            {/* Category Shortcuts - Circular Icons */}
            <div className="bg-white p-4 border-b border-gray-200">
              <div className="flex gap-4 justify-center">
                {/* PERFUMES */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border-2 border-gray-200 overflow-hidden">
                    <img 
                      src={img2705} 
                      alt="PERFUMES"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-black">PERFUMES</span>
                  <span className="text-xs text-gray-600">VINTAGE BEAUTY CEO</span>
                </div>
                {/* COSMETICS */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border-2 border-gray-200 overflow-hidden">
                    <img 
                      src={img2707} 
                      alt="COSMETICS"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-black">COSMETICS</span>
                  <span className="text-xs text-gray-600">VINTAGE BEAUTY</span>
                </div>
                {/* SKINCARE */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border-2 border-gray-200 overflow-hidden">
                    <img 
                      src={img2709} 
                      alt="SKINCARE"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-black">SKINCARE</span>
                </div>
              </div>
            </div>

            {/* Promotional Banner - Zodiac Collection */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 m-4 rounded-xl relative overflow-hidden">
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
        </>
      )}

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[100] shadow-lg w-full max-w-full">
        <div className="flex items-center justify-around py-2 w-full max-w-full">
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </button>
          <Link to="/shop-all" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs font-medium">Shop All</span>
          </Link>
          <Link to="/crazy-deals" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
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

      {/* Cart Slide */}
      {isCartOpen && (
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
              {cartItems.length === 0 ? (
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
                        <div key={product.id} className="flex-shrink-0 w-40 bg-white border border-gray-200 rounded-xl overflow-hidden">
                          <div className="w-full h-40 bg-gray-50 overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
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
                    {cartItems.map((item) => (
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
                                  setCartItems(cartItems.map(cartItem => 
                                    cartItem.id === item.id 
                                      ? { ...cartItem, quantity: cartItem.quantity - 1 }
                                      : cartItem
                                  ));
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
                                setCartItems(cartItems.map(cartItem => 
                                  cartItem.id === item.id 
                                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                    : cartItem
                                ));
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
                        ₹{cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2)}
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
    </div>
  );
};

export default Home;

