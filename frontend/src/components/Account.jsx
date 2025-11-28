import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import BottomNavbar from './BottomNavbar';
import logo from '../assets/logo vintage.png';

const Account = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const accountOptions = [
    {
      id: 'orders',
      title: 'My Orders',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      onClick: () => navigate('/orders'),
    },
    {
      id: 'wishlist',
      title: 'Wishlist',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      onClick: () => navigate('/wishlist'),
    },
    {
      id: 'addresses',
      title: 'My Addresses',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      onClick: () => navigate('/addresses'),
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      onClick: () => console.log('Notifications clicked'),
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      onClick: () => console.log('Settings clicked'),
    },
    {
      id: 'help',
      title: 'Help & Support',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      onClick: () => console.log('Help clicked'),
    },
    {
      id: 'faqs',
      title: 'FAQs',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      onClick: () => navigate('/faqs'),
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      onClick: () => navigate('/terms-and-conditions'),
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      onClick: () => navigate('/privacy-policy'),
    },
    {
      id: 'about',
      title: 'About Us',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      onClick: () => console.log('About clicked'),
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      onClick: () => console.log('Contact clicked'),
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      ),
      onClick: () => {
        logout();
        navigate('/login');
      },
      isDestructive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
      {/* Header */}
      <nav className="w-full bg-black border-b border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2 md:gap-3">
              {logo && (
                <img 
                  src={logo} 
                  alt="Vintage Beauty Logo" 
                  className="h-6 md:h-8 w-auto"
                />
              )}
              <h1 className="text-base md:text-xl lg:text-2xl font-semibold uppercase tracking-wider text-white">
                Account
              </h1>
            </div>

            <div className="w-10"></div> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 max-w-4xl">
        {/* Profile Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl md:rounded-3xl p-4 md:p-6 mb-4 md:mb-6 border border-gray-800 shadow-xl">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Profile Avatar */}
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center border-2 border-[#D4AF37] shadow-lg">
                <span className="text-2xl md:text-3xl font-bold text-black">
                  JD
                </span>
              </div>
              <button className="absolute bottom-0 right-0 bg-[#D4AF37] text-black rounded-full p-1.5 md:p-2 shadow-lg hover:bg-amber-500 transition-colors">
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-lg md:text-2xl font-bold text-white mb-1">
                John Doe
              </h2>
              <p className="text-sm md:text-base text-gray-400 mb-2">
                john.doe@example.com
              </p>
              <button className="text-xs md:text-sm text-[#D4AF37] hover:text-amber-400 font-medium transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-2 md:space-y-3">
          {accountOptions.map((option, index) => (
            <button
              key={option.id}
              onClick={option.onClick}
              className={`w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 bg-gray-900 hover:bg-gray-800 rounded-xl md:rounded-2xl transition-all duration-200 border border-gray-800 hover:border-[#D4AF37]/30 group ${
                option.isDestructive ? 'hover:bg-red-900/20 hover:border-red-500/30' : ''
              }`}
            >
              <div className={`flex-shrink-0 ${option.isDestructive ? 'text-red-400' : 'text-[#D4AF37]'} group-hover:scale-110 transition-transform`}>
                {option.icon}
              </div>
              <span className={`flex-1 text-left text-sm md:text-base font-medium ${
                option.isDestructive ? 'text-red-400' : 'text-white'
              }`}>
                {option.title}
              </span>
              <svg 
                className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-[#D4AF37] transition-colors ${
                  option.isDestructive ? 'group-hover:text-red-400' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-xs md:text-sm text-gray-500">
            Vintage Beauty © 2025. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom Navigation Bar - Mobile Only */}
      <BottomNavbar />
    </div>
  );
};

export default Account;

