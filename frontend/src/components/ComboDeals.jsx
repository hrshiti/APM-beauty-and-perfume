import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { allProducts } from '../data/productsData';
import toast from 'react-hot-toast';
import logo from '../assets/logo vintage.png';
// Import product images from assets folder
import img1 from '../assets/IMG_2698.JPG';
import img2 from '../assets/IMG_2700.JPG';
import img3 from '../assets/IMG_2702.JPG';
import img4 from '../assets/IMG_2703.JPG';
import img5 from '../assets/IMG_2705.JPG';
import img6 from '../assets/IMG_2707.JPG';
import img7 from '../assets/IMG_2709.JPG';
import img8 from '../assets/IMG_2711.JPG';
import img9 from '../assets/IMG_2719.JPG';
import img10 from '../assets/IMG_2721.JPG';
import img11 from '../assets/IMG_2723.JPG';
import img12 from '../assets/IMG_2725.JPG';
import img13 from '../assets/IMG_2727.JPG';
import img14 from '../assets/IMG_2728.JPG';
import img15 from '../assets/IMG_2732.JPG';

const ComboDeals = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addItem, getItemCount } = useCartStore();
  const [selectedItems, setSelectedItems] = useState([]);
  const cartItemCount = getItemCount();

  // Map images to products
  const productImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

  // Get deal configuration based on id
  const getDealConfig = () => {
    const dealConfigs = {
      1: { requiredItems: 3, freeItems: 1, dealPrice: 1298, title: "Ultimate Perfume Box" },
      2: { requiredItems: 4, freeItems: 1, dealPrice: 1798, title: "The Self Love Kit" },
      3: { requiredItems: 5, freeItems: 1, dealPrice: 2298, title: "Scent Shower Combo" },
      4: { requiredItems: 6, freeItems: 1, dealPrice: 2598, title: "Premium Collection Box" }
    };
    return dealConfigs[id] || dealConfigs[1];
  };

  const dealConfig = getDealConfig();
  const { requiredItems, freeItems, dealPrice, title } = dealConfig;

  // Get available products (perfumes)
  const availableProducts = allProducts
    .filter(p => p.category === 'perfume')
    .slice(0, 12)
    .map((product, index) => ({
      ...product,
      image: productImages[index % productImages.length],
      displayPrice: product.price ? `₹${product.price}` : (product.sizes?.[2]?.price ? `₹${product.sizes[2].price}` : '₹699'),
      actualPrice: product.price || product.sizes?.[2]?.price || 699
    }));

  const handleAddToBox = (product) => {
    if (selectedItems.length >= requiredItems) {
      toast.error(`You can only select ${requiredItems} items for this deal`);
      return;
    }
    
    if (selectedItems.some(item => item.id === product.id)) {
      toast.error('This item is already in your box');
      return;
    }

    setSelectedItems([...selectedItems, product]);
    toast.success('Added to box!', {
      style: {
        background: '#1F1F1F',
        color: '#fff',
        border: '1px solid #D4AF37',
      },
      iconTheme: {
        primary: '#D4AF37',
        secondary: '#1F1F1F',
      },
    });
  };

  const handleRemoveFromBox = (productId) => {
    setSelectedItems(selectedItems.filter(item => item.id !== productId));
    toast.success('Removed from box', {
      style: {
        background: '#1F1F1F',
        color: '#fff',
        border: '1px solid #D4AF37',
      },
      iconTheme: {
        primary: '#D4AF37',
        secondary: '#1F1F1F',
      },
    });
  };

  const calculateOriginalTotal = () => {
    return selectedItems.reduce((sum, item) => sum + item.actualPrice, 0);
  };

  const handleProceedToCheckout = () => {
    if (selectedItems.length < requiredItems) {
      toast.error(`Please select ${requiredItems} items to proceed`, {
        style: {
          background: '#1F1F1F',
          color: '#fff',
          border: '1px solid #D4AF37',
        },
      });
      return;
    }
    
    // Add all selected items to cart
    selectedItems.forEach(item => {
      addItem(item, 1, item.sizes?.[2]?.size || '100ml');
    });
    
    toast.success(`${selectedItems.length} items added to cart!`, {
      style: {
        background: '#1F1F1F',
        color: '#fff',
        border: '1px solid #D4AF37',
      },
      iconTheme: {
        primary: '#D4AF37',
        secondary: '#1F1F1F',
      },
    });
    
    navigate('/cart');
  };

  const originalTotal = calculateOriginalTotal();
  const savings = originalTotal - dealPrice;
  const progress = (selectedItems.length / requiredItems) * 100;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pb-24 md:pb-0">
      {/* Navigation Bar */}
      <nav className="w-full bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
              aria-label="Back"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Logo/Brand Name */}
            <div className="flex items-center gap-2 md:gap-3">
              {logo && (
                <img 
                  src={logo} 
                  alt="VINTAGE BEAUTY Logo" 
                  className="h-6 md:h-8 w-auto"
                />
              )}
              <h1 className="text-base md:text-xl lg:text-2xl font-semibold uppercase tracking-wider text-white">
                VINTAGE BEAUTY
              </h1>
            </div>

            {/* Shopping Bag Icon */}
            <button
              onClick={() => navigate('/cart')}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors relative"
              aria-label="Shopping Cart"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Promotional Banner */}
      <div className="bg-black text-white py-2 md:py-3 relative overflow-hidden border-b border-[#D4AF37]/20">
        <div className="text-xs md:text-sm font-medium text-center px-4 text-[#D4AF37]">
          FLAT 5% OFF ON PREPAID ORDERS
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-6 max-w-full overflow-x-hidden">
        {/* Page Title */}
        <div className="mb-4 md:mb-6 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h1>
          <p className="text-sm md:text-base text-gray-400">
            Select {requiredItems} items and get {freeItems} free!
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6 md:mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm md:text-base text-gray-400">
              {selectedItems.length} of {requiredItems} items selected
            </span>
            <span className="text-sm md:text-base font-bold text-[#D4AF37]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 md:h-4">
            <div 
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] h-3 md:h-4 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Selected Items Preview */}
        {selectedItems.length > 0 && (
          <div className="mb-6 md:mb-8 max-w-2xl mx-auto">
            <h3 className="text-sm md:text-base font-semibold text-white mb-3">Selected Items:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-2 border border-[#D4AF37]/30"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-8 h-8 md:w-10 md:h-10 rounded object-cover"
                  />
                  <span className="text-xs md:text-sm text-white flex-1 truncate max-w-[120px] md:max-w-[200px]">
                    {item.name}
                  </span>
                  <button
                    onClick={() => handleRemoveFromBox(item.id)}
                    className="text-red-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-24 md:mb-32">
          {availableProducts.map((product) => {
            const isSelected = selectedItems.some(item => item.id === product.id);
            const canSelect = selectedItems.length < requiredItems;
            
            return (
              <div 
                key={product.id} 
                className={`bg-gray-900 rounded-xl overflow-hidden border-2 transition-all ${
                  isSelected 
                    ? 'border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                {/* Product Image */}
                <div className="relative">
                  <div className="relative w-full h-32 sm:h-40 md:h-48 bg-gray-800 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-[#D4AF37] text-black rounded-full w-6 h-6 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-3 md:p-4">
                  {/* Product Name */}
                  <h3 className="font-semibold text-xs md:text-sm text-white mb-2 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>
                  
                  {/* Price */}
                  <p className="text-sm md:text-base font-bold text-[#D4AF37] mb-3">
                    {product.displayPrice}
                  </p>

                  {/* Add to Box Button */}
                  {isSelected ? (
                    <button
                      onClick={() => handleRemoveFromBox(product.id)}
                      className="w-full bg-gray-800 text-white py-2 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm hover:bg-gray-700 transition-colors border border-[#D4AF37]/30"
                    >
                      REMOVE FROM BOX
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToBox(product)}
                      disabled={!canSelect}
                      className={`w-full py-2 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm transition-colors ${
                        canSelect
                          ? 'bg-[#D4AF37] text-black hover:bg-[#F4D03F]'
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      ADD TO BOX
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fixed Bottom Bar - Total Price Section */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-[#D4AF37]/20 py-3 md:py-4 px-4 md:px-0 z-50 safe-area-inset-bottom">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 max-w-6xl">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden hidden md:block">
                <img 
                  src={img1} 
                  alt="Combo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm md:text-base font-semibold text-white">{title}</p>
                <p className="text-xs md:text-sm text-gray-400 hidden md:block">
                  {selectedItems.length} of {requiredItems} items selected
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
              <div className="text-center md:text-right">
                {selectedItems.length >= requiredItems ? (
                  <>
                    <p className="text-lg md:text-2xl font-bold text-[#D4AF37]">
                      Total: ₹{dealPrice.toLocaleString('en-IN')}/-
                    </p>
                    {savings > 0 && (
                      <p className="text-xs md:text-sm text-green-400">
                        You save ₹{savings.toLocaleString('en-IN')}!
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-sm md:text-base text-gray-400">
                    Select {requiredItems - selectedItems.length} more item{requiredItems - selectedItems.length !== 1 ? 's' : ''}
                  </p>
                )}
              </div>
              {selectedItems.length >= requiredItems && (
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-[#D4AF37] text-black rounded-lg font-semibold text-sm md:text-base hover:bg-[#F4D03F] transition-colors shadow-lg"
                >
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar - Hidden on this page for mobile view */}
    </div>
  );
};

export default ComboDeals;

