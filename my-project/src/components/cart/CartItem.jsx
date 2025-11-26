import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  const itemTotal = parseFloat(item.price) * item.quantity;

  return (
    <div className="flex gap-4 mb-4 pb-4 border-b border-gray-200 last:border-0">
      <Link to={`/product/${item.id}`} className="flex-shrink-0">
        <img 
          src={item.image || item.images?.[0]} 
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link to={`/product/${item.id}`}>
          <h3 className="font-semibold text-sm mb-1 text-gray-800 hover:text-purple-600 transition-colors line-clamp-2">
            {item.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">₹{item.price}</p>
        
        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Price and Remove */}
      <div className="text-right flex-shrink-0">
        <p className="font-semibold mb-2 text-gray-800">₹{itemTotal.toFixed(2)}</p>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

