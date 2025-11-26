import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import { useWishlistStore } from '../../store/wishlistStore';
import SearchBar from './SearchBar';

const Header = () => {
  const navigate = useNavigate();
  const { openCart, getItemCount } = useCartStore();
  const { isAuthenticated, user, logout } = useAuthStore();
  const { getCount: getWishlistCount } = useWishlistStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const cartItemCount = getItemCount();
  const wishlistCount = getWishlistCount();

  const categories = [
    { name: 'Perfumes', submenu: [
      { name: 'All Perfumes', slug: 'perfumes' },
      { name: 'Men', slug: 'men' },
      { name: 'Women', slug: 'women' },
      { name: 'Unisex', slug: 'unisex' }
    ]},
    { name: 'Bath & Body', submenu: [
      { name: 'Shower Gel', slug: 'shower-gel' },
      { name: 'Body Mist', slug: 'body-mist' },
      { name: 'Body Lotion', slug: 'body-lotion' }
    ]},
    { name: 'Cosmetics', submenu: [
      { name: 'Lipsticks', slug: 'lipsticks' },
      { name: 'Makeup', slug: 'makeup' },
      { name: 'Kajal', slug: 'kajal' }
    ]},
    { name: 'Skincare', submenu: [
      { name: 'Face Wash', slug: 'face-wash' },
      { name: 'Sunscreen', slug: 'sunscreen' },
      { name: 'Lip Care', slug: 'lip-care' }
    ]},
    { name: 'Gifting', submenu: [
      { name: 'Gift Sets', slug: 'gift-sets' },
      { name: 'Perfume Combos', slug: 'perfume-combos' }
    ]}
  ];

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  return (
    <>
      {/* Top Promotional Banner */}
      <div className="bg-black text-white py-2 text-center text-xs md:text-sm relative overflow-hidden">
        <div className="font-medium">
          FLAT 5% OFF ON ALL PREPAID ORDERS
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 w-full max-w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="text-xl md:text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
              VINTAGE BEAUTY®
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                Home
              </Link>
              <Link to="/shop-all" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                Shop All
              </Link>
              <Link to="/crazy-deals" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                Crazy Deals
              </Link>
              
              {/* Categories Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsCategoryMenuOpen(true)}
                onMouseLeave={() => setIsCategoryMenuOpen(false)}
              >
                <button className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200 flex items-center gap-1">
                  Categories
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCategoryMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                    {categories.map((cat, idx) => (
                      <div key={idx} className="px-4 py-2 hover:bg-gray-50">
                        <Link 
                          to={`/category/${cat.submenu[0]?.slug || cat.name.toLowerCase()}`} 
                          className="font-semibold text-gray-800 hover:text-purple-600 block mb-1"
                        >
                          {cat.name}
                        </Link>
                        <div className="mt-1 space-y-1">
                          {cat.submenu.map((sub, subIdx) => (
                            <Link 
                              key={subIdx}
                              to={`/category/${sub.slug}`}
                              className="block text-sm text-gray-600 hover:text-purple-600 pl-4 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/account" className="text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200">
                Account
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 md:gap-6">
              {/* Search */}
              <div className="hidden md:block">
                <SearchBar />
              </div>

              {/* Mobile Search Button */}
              <button 
                onClick={() => navigate('/search')}
                className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Support */}
              <a 
                href="tel:+919876543210" 
                className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Support</span>
              </a>

              {/* Wishlist */}
              <Link 
                to="/wishlist" 
                className="relative text-gray-700 hover:text-purple-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                onClick={openCart} 
                className="relative text-gray-700 hover:text-purple-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        onClick={handleLogout}
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
                  className="px-4 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition-colors text-sm"
                >
                  Login
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link to="/" className="block text-gray-700 hover:text-purple-600 font-medium">Home</Link>
              <Link to="/shop-all" className="block text-gray-700 hover:text-purple-600 font-medium">Shop All</Link>
              <Link to="/crazy-deals" className="block text-gray-700 hover:text-purple-600 font-medium">Crazy Deals</Link>
              <Link to="/account" className="block text-gray-700 hover:text-purple-600 font-medium">Account</Link>
              {categories.map((cat, idx) => (
                <div key={idx}>
                  <Link to={`/category/${cat.submenu[0]?.slug || cat.name.toLowerCase()}`} className="block text-gray-700 hover:text-purple-600 font-medium">
                    {cat.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

