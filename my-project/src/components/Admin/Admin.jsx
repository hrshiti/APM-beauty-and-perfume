import React from 'react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome to Admin Panel</h2>
          <p className="text-gray-600">
            This is the admin module for managing the perfume e-commerce platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;

