import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { useAuthStore } from '../store/authStore';
import { getMockCategories } from '../services/mockDataService';
import { productService } from '../services/productService';
import Header from '../components/common/Header';
import toast from 'react-hot-toast';

const ShopAll = () => {
  const navigate = useNavigate();
  const { addItem, openCart, closeCart, getItemCount } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist, getCount: getWishlistCount } = useWishlistStore();
  const { isAuthenticated, user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('SHOP ALL');
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCategoriesOpen, setIsSidebarCategoriesOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categories = getMockCategories();
  
  const cartItemCount = getItemCount();
  const wishlistCount = getWishlistCount();

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.getAllProducts();
        if (response.success && response.data) {
          setAllProducts(response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
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

  // Filter products based on active tab
  const filteredProducts = React.useMemo(() => {
    if (!allProducts || allProducts.length === 0) return [];
    
    if (activeTab === 'BESTSELLERS') {
      return allProducts.filter(p => p.isBestSeller);
    }
    
    return allProducts;
  }, [allProducts, activeTab]);


  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 safe-area-inset-bottom overflow-x-hidden w-full pt-[8.5rem] md:pt-[9rem]">
        {/* Shop All Page Content */}
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4 lg:py-6 max-w-full overflow-x-hidden">
        {/* Tabs Row */}
        <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4 overflow-x-auto pb-2 scrollbar-hide">
          {/* SHOP ALL Tab - Active */}
          <button
            onClick={() => setActiveTab('SHOP ALL')}
            className={`flex items-center gap-1 md:gap-1.5 px-2.5 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-[10px] md:text-xs lg:text-sm whitespace-nowrap transition flex-shrink-0 ${
              activeTab === 'SHOP ALL'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>SHOP ALL</span>
          </button>

          {/* CRAZY DEALS Tab */}
          <Link
            to="/crazy-deals"
            className="flex items-center gap-1 md:gap-1.5 px-2.5 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-[10px] md:text-xs lg:text-sm whitespace-nowrap transition bg-gray-100 text-gray-600 flex-shrink-0"
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>CRAZY DEALS</span>
          </Link>

          {/* BESTSELLERS Tab */}
          <button
            onClick={() => setActiveTab('BESTSELLERS')}
            className={`flex items-center gap-1 md:gap-1.5 px-2.5 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-[10px] md:text-xs lg:text-sm whitespace-nowrap transition flex-shrink-0 ${
              activeTab === 'BESTSELLERS'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>BESTSELLERS</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="mb-3 md:mb-4 lg:mb-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">SHOP ALL</h1>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading products...</p>
          </div>
        ) : filteredProducts && filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {filteredProducts.map((product) => {
              // Format price and discount
              const price = typeof product.price === 'number' ? product.price.toFixed(2) : product.price;
              const originalPrice = product.originalPrice ? (typeof product.originalPrice === 'number' ? product.originalPrice.toFixed(2) : product.originalPrice) : null;
              const discountPercent = originalPrice && price ? Math.round(((parseFloat(originalPrice) - parseFloat(price)) / parseFloat(originalPrice)) * 100) : product.discount || 0;
              const tag = product.isBestSeller ? 'BESTSELLER' : (product.isFeatured ? 'FEATURED' : (product.isMostLoved ? 'MOST LOVED' : null));
              
              return (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition">
                  {/* Category Label */}
                  <div className="px-2 md:px-3 pt-2 md:pt-3 pb-0.5 md:pb-1">
                    <p className="text-[10px] md:text-xs text-gray-600 font-medium uppercase">{product.categoryName || product.category || 'PRODUCT'}</p>
                  </div>
                  
                  {/* Product Image Container */}
                  <div className="relative px-2 md:px-3 pb-1.5 md:pb-2">
                    <Link to={`/product/${product.id}`} className="block relative w-full h-40 md:h-48 lg:h-56 bg-gray-50 rounded-xl overflow-hidden group cursor-pointer">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                      />
                      
                      {/* Wishlist Heart Icon - Top Right */}
                      <button
                        onClick={(e) => handleWishlistToggle(product, e)}
                        className={`absolute top-1.5 md:top-2 right-1.5 md:right-2 p-1.5 md:p-2 rounded-full transition-colors z-20 ${
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
                      {tag && (
                        <span className="absolute top-1.5 md:top-2 left-1.5 md:left-2 bg-amber-700 text-white text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded z-10 pointer-events-none">
                          {tag}
                        </span>
                      )}
                      
                      {/* Discount Badge - Bottom Left */}
                      {discountPercent > 0 && (
                        <span className="absolute bottom-1.5 md:bottom-2 left-1.5 md:left-2 bg-green-500 text-white text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded z-10 pointer-events-none">
                          {discountPercent}% OFF
                        </span>
                      )}
                    </Link>
                  </div>
                  
                  {/* Product Details */}
                  <div className="px-2 md:px-3 pb-2.5 md:pb-3">
                    {/* Product Name */}
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-xs md:text-sm text-gray-800 mb-1.5 md:mb-2 line-clamp-2 min-h-[2.25rem] md:min-h-[2.5rem] hover:text-purple-600 transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    
                    {/* Rating Section */}
                    <div className="flex items-center gap-0.5 md:gap-1 mb-1.5 md:mb-2 flex-wrap">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="text-xs md:text-sm font-semibold text-gray-800">{product.rating}</span>
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-500 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[10px] md:text-xs text-gray-600">({(product.reviews / 1000).toFixed(1)}K Reviews)</span>
                    </div>
                    
                    {/* Pricing */}
                    <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                      <span className="text-base md:text-lg font-bold text-black">₹{price}</span>
                      {originalPrice && (
                        <span className="text-xs md:text-sm text-gray-500 line-through">₹{originalPrice}</span>
                      )}
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-black text-white py-2 md:py-2.5 rounded-md font-semibold text-xs md:text-sm hover:bg-gray-800 transition"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found.</p>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default ShopAll;
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

      {/* Sidebar */}
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
                      src={img2723} 
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
                      src={img2723} 
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
                      src={img2723} 
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
                      src={img2723} 
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

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[100] shadow-lg">
        <div className="flex items-center justify-around py-2">
          <Link to="/" onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link to="/shop-all" onClick={closeCart} className="flex flex-col items-center gap-1 py-2 px-4 text-purple-600">
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
    </div>
  );
};

export default ShopAll;
