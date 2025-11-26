import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
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
                <Link to="/orders" className="text-xs md:text-sm hover:text-white transition">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-xs md:text-sm hover:text-white transition">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-base md:text-lg font-semibold mb-2 md:mb-4">Categories</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/category/men" className="text-xs md:text-sm hover:text-white transition">
                  Men's Perfume
                </Link>
              </li>
              <li>
                <Link to="/category/women" className="text-xs md:text-sm hover:text-white transition">
                  Women's Perfume
                </Link>
              </li>
              <li>
                <Link to="/category/unisex" className="text-xs md:text-sm hover:text-white transition">
                  Unisex Fragrances
                </Link>
              </li>
              <li>
                <Link to="/category/gift-sets" className="text-xs md:text-sm hover:text-white transition">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link to="/shop-all" className="text-xs md:text-sm hover:text-white transition">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/shop-all" className="text-xs md:text-sm hover:text-white transition">
                  New Arrivals
                </Link>
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
                  className="flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-xs md:text-sm"
                />
                <button className="px-3 md:px-6 py-1.5 md:py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition text-xs md:text-sm">
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
  );
};

export default Footer;

