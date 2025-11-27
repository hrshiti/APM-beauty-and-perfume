import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { useSidebarStore } from '../store/sidebarStore';
import { productService } from '../services/productService';
import toast from 'react-hot-toast';
import ProductCard from '../components/product/ProductCard';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, openCart, closeCart } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
  const { isSidebarOpen } = useSidebarStore();
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    keyBenefits: false,
    howToUse: false,
    perfumeNotes: true,
    faqs: false,
    otherInformation: false,
    allIngredients: false,
    firstPurchase: false
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productResponse = await productService.getProductById(id);
        setProduct(productResponse.data);
        
        const relatedResponse = await productService.getRelatedProducts(id);
        setRelatedProducts(relatedResponse.data);
        
        const reviewsResponse = await productService.getProductReviews(id);
        setReviews(reviewsResponse.data);
      } catch (error) {
        toast.error('Product not found');
        navigate('/shop-all');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <>
        <Header />
        <div className={`min-h-screen bg-white transition-all duration-300 pt-16 ${isSidebarOpen ? 'md:ml-80 md:w-[calc(100%-20rem)]' : 'md:w-full'}`}>
          {/* Promotional Banner - Shifts with content */}
          {isBannerVisible && (
            <div className="bg-black text-white py-2 text-center text-xs md:text-sm relative overflow-hidden w-full">
              <div className="font-medium">
                FLAT 5% OFF ON ALL PREPAID ORDERS
              </div>
              {/* Dismiss Button */}
              <button
                onClick={() => setIsBannerVisible(false)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading product...</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!product) {
    return null;
  }

  const inWishlist = isInWishlist(product.id);
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success('Added to cart!');
    openCart();
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Get all images or create empty placeholders
  const images = product.images && product.images.length > 0 
    ? product.images 
    : (product.image ? [product.image] : []);
  
  // Create empty cards if less than 4 images
  const displayImages = [...images];
  while (displayImages.length < 4) {
    displayImages.push(null);
  }

  // Calculate rating breakdown
  const ratingBreakdown = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length
  };
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(2)
    : product.rating || 0;

  return (
    <>
      <Header />
      <div className={`min-h-screen bg-white flex flex-col transition-all duration-300 pt-16 ${isSidebarOpen ? 'md:ml-80 md:w-[calc(100%-20rem)]' : 'md:w-full'}`}>
        {/* Promotional Banner - Shifts with content */}
        {isBannerVisible && (
          <div className="bg-black text-white py-2 text-center text-xs md:text-sm relative overflow-hidden w-full">
            <div className="font-medium">
              FLAT 5% OFF ON ALL PREPAID ORDERS
            </div>
            {/* Dismiss Button */}
            <button
              onClick={() => setIsBannerVisible(false)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <div className="flex-1 container mx-auto px-4 py-6 md:py-8 pb-24 md:pb-8">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop-all" className="hover:text-purple-600">Shop</Link></li>
            <li>/</li>
            <li className="text-gray-800">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Product Images */}
          <div className="lg:col-span-1">
            {/* Main Image */}
            <div className="mb-4">
              <div className="relative w-full h-96 md:h-[500px] bg-gray-50 rounded-xl overflow-hidden">
                {images[selectedImage] || product.image ? (
                  <img 
                    src={images[selectedImage] || product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400">No Image Available</span>
                  </div>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded">
                    BESTSELLER
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="absolute bottom-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded">
                    {discountPercentage}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {displayImages.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden transition-all ${
                    selectedImage === idx ? 'border-purple-600' : 'border-gray-300'
                  }`}
                >
                  {img ? (
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <span className="text-gray-400 text-xs">Empty</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Middle Column - Product Info */}
          <div className="lg:col-span-1">
            <div className="mb-2">
              <p className="text-xs text-gray-600 font-medium uppercase">{product.categoryName || 'PRODUCT'}</p>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
            <p className="text-sm text-gray-600 mb-4">EAU DE PARFUM</p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-lg">{averageRating}</span>
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">({totalReviews > 0 ? totalReviews : product.reviews || 0} Reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              {discountPercentage > 0 && (
                <span className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold mb-2">
                  -{discountPercentage}%
                </span>
              )}
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-black">₹{product.price}</span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed mb-4"
            >
              ADD TO CART
            </button>

            {/* Personalization Option */}
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">Personalize Perfume</p>
                    <p className="text-xs text-gray-600">Personalize with your name or message for just ₹75 extra - prepaid only!</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg">
                <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs font-semibold text-center">LONG LASTING</p>
              </div>
              <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-gray-600 rounded-full mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">IFRA</span>
                </div>
                <p className="text-xs font-semibold text-center">IFRA - CERTIFIED</p>
              </div>
              <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg">
                <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <p className="text-xs font-semibold text-center">IMPORTED OILS</p>
              </div>
              <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg">
                <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs font-semibold text-center">MADE IN INDIA</p>
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                {product.description || `Bring out your inner CEO to work 💼 everyday with the ${product.name}.`}
              </p>
              <button className="text-purple-600 text-sm font-semibold mt-2 hover:underline">
                Read more
              </button>
            </div>
          </div>

          {/* Right Column - Exclusive Offers */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <h2 className="text-xl font-bold text-gray-800">EXCLUSIVE OFFERS</h2>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <h3 className="font-bold text-gray-800">2 FOR ₹949</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Any 2 100ml perfumes for just ₹949!</p>
                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <button className="text-sm font-semibold text-purple-600 hover:underline">Perfect Jodi</button>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <h3 className="font-bold text-gray-800">3 FOR ₹1298</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Get any 3 Perfumes for just ₹1298</p>
                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <button className="text-sm font-semibold text-purple-600 hover:underline">Ultimate Perfume Box</button>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <h3 className="font-bold text-gray-800">6 FOR ₹1298</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Get any 100ml perfume and 5 skincare products for just ₹1298!</p>
                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <button className="text-sm font-semibold text-purple-600 hover:underline">Self Love Kit</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Image */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4 text-white text-center mb-6">
              <p className="font-bold text-lg mb-1">Ultimate Perfume Box</p>
              <p className="text-sm">Get any 3 for ₹1298+</p>
            </div>
          </div>
        </div>

        {/* Expandable Information Sections */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-4">
            {/* Is This Your First Purchase */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('firstPurchase')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-semibold text-gray-800">IS THIS YOUR FIRST BELLA VITA PURCHASE?</span>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.firstPurchase ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {expandedSections.firstPurchase && (
                <div className="pb-4 text-gray-600 text-sm">
                  <p>Welcome to Bella Vita! We're excited to have you. Our products are crafted with premium ingredients and are perfect for everyday use. Start your journey with our bestselling perfumes.</p>
                </div>
              )}
            </div>

            {/* Key Benefits */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('keyBenefits')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-semibold text-gray-800">KEY BENEFITS</span>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.keyBenefits ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {expandedSections.keyBenefits && (
                <div className="pb-4 text-gray-600 text-sm space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Long-lasting fragrance that stays with you all day</li>
                    <li>IFRA certified for safe use</li>
                    <li>Made with imported premium oils</li>
                    <li>Perfect for office and casual wear</li>
                    <li>Elegant packaging, ideal for gifting</li>
                  </ul>
                </div>
              )}
            </div>

            {/* How to Use */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('howToUse')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-semibold text-gray-800">HOW TO USE</span>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.howToUse ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {expandedSections.howToUse && (
                <div className="pb-4 text-gray-600 text-sm space-y-2">
                  <p>Apply the perfume to pulse points such as wrists, neck, and behind the ears. For best results, spray from a distance of 6-8 inches. The fragrance will develop over time, revealing its full character.</p>
                </div>
              )}
            </div>

            {/* Perfume Notes */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('perfumeNotes')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-semibold text-gray-800">PERFUME NOTES</span>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.perfumeNotes ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              {expandedSections.perfumeNotes && (
                <div className="pb-4 text-gray-600 text-sm space-y-2">
                  <div>
                    <p className="font-semibold mb-1">Top Notes:</p>
                    <p>Fresh citrus, bergamot, and green notes</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Middle Notes:</p>
                    <p>Floral bouquet with hints of lavender and jasmine</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Base Notes:</p>
                    <p>Warm musk, sandalwood, and amber</p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQs */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('faqs')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-semibold text-gray-800">FAQS</span>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.faqs ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {expandedSections.faqs && (
                <div className="pb-4 text-gray-600 text-sm space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Q: How long does the fragrance last?</p>
                    <p>A: Our perfumes are designed to last 6-8 hours on the skin, depending on your skin type and application method.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Q: Is this suitable for sensitive skin?</p>
                    <p>A: Yes, our products are IFRA certified and tested for safe use on all skin types.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Q: Can I return or exchange the product?</p>
                    <p>A: Yes, we offer a 7-day return and exchange policy. Please check our return policy for details.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Other Information */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('otherInformation')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-semibold text-gray-800">OTHER INFORMATION</span>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.otherInformation ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {expandedSections.otherInformation && (
                <div className="pb-4 text-gray-600 text-sm space-y-2">
                  <p><strong>Volume:</strong> 100ml | 3.4 fl.oz</p>
                  <p><strong>Country of Origin:</strong> India</p>
                  <p><strong>Manufacturer:</strong> Bella Vita Luxury</p>
                  <p><strong>Storage:</strong> Store in a cool, dry place away from direct sunlight</p>
                </div>
              )}
            </div>

            {/* All Ingredients */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('allIngredients')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-semibold text-gray-800">ALL INGREDIENTS</span>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.allIngredients ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {expandedSections.allIngredients && (
                <div className="pb-4 text-gray-600 text-sm">
                  <p>Alcohol Denat., Aqua (Water), Parfum (Fragrance), Limonene, Linalool, Citronellol, Geraniol, Citral, Coumarin, Benzyl Benzoate, Benzyl Salicylate, Alpha-Isomethyl Ionone, Hydroxycitronellal, Isoeugenol, Amyl Cinnamal, Amylcinnamyl Alcohol, Benzyl Alcohol, Cinnamyl Alcohol, Cinnamal, Eugenol, Farnesol, Butylphenyl Methylpropional, Hexyl Cinnamal.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Overall Rating */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-6 h-6 text-yellow-400 fill-current" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-4xl font-bold text-gray-800 mb-1">{averageRating}</p>
                <p className="text-sm text-gray-600 flex items-center justify-center md:justify-start gap-1">
                  Based on {totalReviews > 0 ? totalReviews : product.reviews || 0} reviews
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </p>
              </div>

              {/* Rating Breakdown */}
              <div className="md:col-span-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = ratingBreakdown[rating] || 0;
                  const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                  return (
                    <div key={rating} className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1 w-20">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${percentage > 0 ? 'bg-yellow-400' : 'bg-gray-300'}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Write Review Button */}
            <div className="flex justify-end mb-6">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Write a review
              </button>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.length === 0 ? (
                <p className="text-gray-600 text-center py-8">No reviews yet. Be the first to review!</p>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">Most Recent</h3>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                      <option>Most Recent</option>
                      <option>Highest Rated</option>
                      <option>Lowest Rated</option>
                    </select>
                  </div>
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                          {review.userName.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-semibold text-gray-800">{review.userName}</p>
                              <div className="flex items-center gap-1 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i} 
                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <span className="text-xs text-gray-500">
                              {new Date(review.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-1">
                            {review.comment.split('.')[0] || 'Great Product'}
                          </h4>
                          <p className="text-gray-600 text-sm">{review.comment}</p>
                          {review.verified && (
                            <span className="inline-flex items-center gap-1 text-xs text-green-600 mt-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Verified Purchase
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12 md:mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
        </div>
        <Footer />

        {/* Bottom Navigation Bar - Mobile Only */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[100] shadow-lg w-full max-w-full">
          <div className="flex items-center justify-around py-2 w-full max-w-full">
            <Link to="/" onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-xs font-medium">Home</span>
            </Link>
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
            <Link to="/account" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs font-medium">Account</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ProductDetail;
