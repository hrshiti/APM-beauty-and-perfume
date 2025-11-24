import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  // Mock user data - In real app, this would come from authentication
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    profileImage: null, // You can add profile image URL here
    memberSince: "January 2024"
  });

  // Account menu options
  const accountOptions = [
    {
      id: 1,
      title: "My Orders",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      description: "View and track your orders",
      onClick: () => console.log("My Orders clicked")
    },
    {
      id: 2,
      title: "My Wishlist",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Items you've saved for later",
      onClick: () => console.log("My Wishlist clicked")
    },
    {
      id: 3,
      title: "My Addresses",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: "Manage your delivery addresses",
      onClick: () => console.log("My Addresses clicked")
    },
    {
      id: 4,
      title: "Payment Methods",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      description: "Manage your payment options",
      onClick: () => console.log("Payment Methods clicked")
    },
    {
      id: 5,
      title: "My Reviews",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      description: "View and manage your product reviews",
      onClick: () => console.log("My Reviews clicked")
    },
    {
      id: 6,
      title: "Notifications",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      description: "Manage your notification preferences",
      onClick: () => console.log("Notifications clicked")
    },
    {
      id: 7,
      title: "Help & Support",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: "Get help with your account and orders",
      onClick: () => console.log("Help & Support clicked")
    },
    {
      id: 8,
      title: "Settings",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: "Account settings and preferences",
      onClick: () => console.log("Settings clicked")
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 safe-area-inset-bottom overflow-x-hidden max-w-full w-full">
      {/* Top Black Header - Promotional Banner */}
      <div className="bg-black text-white py-2 relative overflow-hidden w-full max-w-full">
        <div className="flex items-center justify-center relative w-full max-w-full">
          <div className="text-xs md:text-sm font-medium text-center px-8 md:px-12 w-full max-w-full">
            FLAT 5% OFF ON ALL PREPAID ORDERS
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 w-full max-w-full">
        <div className="container mx-auto px-2 md:px-4 py-2 md:py-3 max-w-full w-full">
          <div className="flex items-center justify-between w-full max-w-full">
            <Link to="/" className="p-1.5 md:p-2">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>

            <div className="flex-1 text-center">
              <h1 className="text-sm md:text-2xl font-bold text-gray-800">MY ACCOUNT</h1>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <button className="p-1.5 md:p-2">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link to="/" className="p-1.5 md:p-2 relative">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Account Page Content */}
      <div className="container mx-auto px-2 md:px-4 py-3 md:py-6 max-w-full overflow-hidden w-full">
        {/* User Profile Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-3 md:mb-6">
          <div className="p-2.5 md:p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
              {/* Profile Picture */}
              <div className="w-14 h-14 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg md:text-3xl font-bold shadow-lg flex-shrink-0">
                {user.profileImage ? (
                  <img 
                    src={user.profileImage} 
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span>{user.name.charAt(0).toUpperCase()}</span>
                )}
              </div>

              {/* User Details */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-sm md:text-2xl font-bold text-gray-800 mb-0 md:mb-1">{user.name}</h2>
                <p className="text-[11px] md:text-base text-gray-600 mb-0.5 md:mb-2">{user.email}</p>
                <p className="text-[10px] md:text-sm text-gray-500 mb-0 md:mb-1">{user.phone}</p>
                <p className="text-[9px] md:text-xs text-gray-400">Member since {user.memberSince}</p>
              </div>

              {/* Edit Profile Button */}
              <button className="border-2 border-black text-black bg-white px-2.5 py-1 md:px-4 md:py-2 rounded-md font-semibold text-[10px] md:text-sm hover:bg-gray-50 transition whitespace-nowrap">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Account Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          {accountOptions.map((option) => (
            <button
              key={option.id}
              onClick={option.onClick}
              className="bg-white rounded-xl shadow-md overflow-hidden p-3 md:p-6 hover:shadow-lg transition text-left group"
            >
              <div className="flex items-start gap-2 md:gap-4">
                {/* Icon */}
                <div className="text-gray-700 group-hover:text-black transition flex-shrink-0">
                  {option.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-0.5 md:mb-1">
                    {option.title}
                  </h3>
                  <p className="text-[10px] md:text-sm text-gray-500">
                    {option.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="text-gray-400 group-hover:text-gray-600 transition flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <div className="mt-4 md:mt-6">
          <button className="w-full bg-red-600 text-white py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[100] shadow-lg w-full max-w-full">
        <div className="flex items-center justify-around py-2 w-full max-w-full">
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
          <Link to="/crazy-deals" className="flex flex-col items-center gap-1 py-2 px-4 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium">Crazy Deals</span>
          </Link>
          <Link to="/account" className="flex flex-col items-center gap-1 py-2 px-4 text-purple-600">
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

export default Account;

