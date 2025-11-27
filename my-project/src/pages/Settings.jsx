import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import toast from 'react-hot-toast';

const Settings = () => {
  const { user, updateUser } = useAuthStore();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    toast.success('Profile updated successfully!');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex flex-col pt-16">
        <div className="flex-1 container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-2xl overflow-x-hidden">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/account"
              className="text-purple-600 hover:text-purple-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Settings</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold mb-4">Profile Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Save Changes
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mt-4">
            <h2 className="text-lg md:text-xl font-bold mb-4">Preferences</h2>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium">Email Notifications</span>
                <input type="checkbox" className="w-5 h-5 text-purple-600" defaultChecked />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium">SMS Notifications</span>
                <input type="checkbox" className="w-5 h-5 text-purple-600" />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium">Marketing Emails</span>
                <input type="checkbox" className="w-5 h-5 text-purple-600" />
              </label>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Settings;

