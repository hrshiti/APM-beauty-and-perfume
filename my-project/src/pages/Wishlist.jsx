import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlistStore } from '../store/wishlistStore';
import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/product/ProductCard';
import toast from 'react-hot-toast';
import Footer from '../components/common/Footer';

const Wishlist = () => {
  const { items, clearWishlist } = useWishlistStore();
  const { addItem, openCart } = useCartStore();

  const handleAddAllToCart = () => {
    items.forEach(item => {
      addItem(item, 1);
    });
    toast.success('All items added to cart!');
    openCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Start adding products to your wishlist</p>
          <Link
            to="/shop-all"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex flex-col">
      <div className="flex-1 container mx-auto px-3 md:px-4 py-4 md:py-6 md:py-8 max-w-full overflow-x-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-0">
            My Wishlist ({items.length})
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <button
              onClick={handleAddAllToCart}
              className="px-3 md:px-4 py-2 text-sm md:text-base bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Add All to Cart
            </button>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to clear your wishlist?')) {
                  clearWishlist();
                  toast.success('Wishlist cleared');
                }
              }}
              className="px-3 md:px-4 py-2 text-sm md:text-base border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold"
            >
              Clear Wishlist
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;

