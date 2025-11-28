import React, { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';

const CouponInput = ({ onClose }) => {
  const { applyCoupon, coupon } = useCartStore();
  const [code, setCode] = useState('');

  const handleApply = () => {
    if (!code.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }

    const success = applyCoupon(code.toUpperCase());
    if (success) {
      toast.success('Coupon applied successfully!');
      setCode('');
      onClose();
    } else {
      toast.error('Invalid coupon code');
    }
  };

  return (
    <div className="space-y-2 w-full">
      <div className="flex gap-2 w-full min-w-0">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 min-w-0 px-2 md:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
        />
        <button
          onClick={handleApply}
          className="px-3 md:px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm font-semibold whitespace-nowrap flex-shrink-0"
        >
          Apply
        </button>
        <button
          onClick={onClose}
          className="px-2 md:px-3 py-2 text-gray-600 hover:text-gray-800 flex-shrink-0"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {coupon && (
        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-md p-2">
          <span className="text-sm text-green-700 font-medium">
            Coupon "{coupon.code}" applied
          </span>
          <button
            onClick={() => {
              useCartStore.getState().removeCoupon();
              toast.success('Coupon removed');
            }}
            className="text-green-700 hover:text-green-900"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default CouponInput;

