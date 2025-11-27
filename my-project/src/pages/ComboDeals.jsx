import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { useAuthStore } from '../store/authStore';
import { getMockCategories } from '../services/mockDataService';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import toast from 'react-hot-toast';

// Import images
import img2616 from '../assets/images vintage/1.jpg';
import img2617 from '../assets/images vintage/2.jpg';
import img2618 from '../assets/images vintage/3.jpg';
import img2619 from '../assets/images vintage/4.jpg';
import img2638 from '../assets/images vintage/5.jpg';
import img2645 from '../assets/images vintage/6.jpg';
import img2648 from '../assets/images vintage/7.jpg';
import img2651 from '../assets/images vintage/8-222.jpg';

const ComboDeals = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addItem, openCart, getItemCount } = useCartStore();
  const { getCount: getWishlistCount } = useWishlistStore();
  const { isAuthenticated, user, logout } = useAuthStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStep1Items, setSelectedStep1Items] = useState([]);
  const [selectedStep2Items, setSelectedStep2Items] = useState([]);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCategoriesOpen, setIsSidebarCategoriesOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categories = getMockCategories();
  
  const cartItemCount = getItemCount();
  const wishlistCount = getWishlistCount();

  // Step 1 Products - Gift Sets
  const step1Products = [
    {
      id: 1,
      name: "Luxury Unisex Perfume Gift Set - 4 x 8ml",
      image: img2616,
      rating: 4.6,
      reviews: 1120,
      price: 549,
      originalPrice: 849
    },
    {
      id: 2,
      name: "Luxury Perfume Gift Set For Women - 4 x 8ml",
      image: img2617,
      rating: 4.8,
      reviews: 584,
      price: 599,
      originalPrice: 899
    },
    {
      id: 3,
      name: "Luxury Perfume Gift Set For Men - 4 x 8ml",
      image: img2618,
      rating: 4.5,
      reviews: 1409,
      price: 549,
      originalPrice: 849
    },
    {
      id: 4,
      name: "Hot & Classy Perfume Set - 2 x 50ml",
      image: img2619,
      rating: 4.9,
      reviews: 69,
      price: 699,
      originalPrice: 999
    }
  ];

  // Step 2 Products - Premium Perfumes
  const step2Products = [
    {
      id: 5,
      name: "CEO Man Perfume - 100ml",
      image: img2638,
      rating: 4.8,
      reviews: 1100,
      price: 449,
      originalPrice: 899
    },
    {
      id: 6,
      name: "VINTAGE BEAUTY® Premium - 100ml",
      image: img2645,
      rating: 4.6,
      reviews: 950,
      price: 699,
      originalPrice: 1199
    },
    {
      id: 7,
      name: "VINTAGE BEAUTY® Classic - 100ml",
      image: img2648,
      rating: 4.5,
      reviews: 850,
      price: 599,
      originalPrice: 899
    },
    {
      id: 8,
      name: "VINTAGE BEAUTY® Fresh - 100ml",
      image: img2651,
      rating: 4.9,
      reviews: 450,
      price: 749,
      originalPrice: 1199
    }
  ];

  const handleAddToBox = (product, step) => {
    if (step === 1) {
      if (selectedStep1Items.length >= 1) {
        toast.error('You can only select 1 gift set');
        return;
      }
      setSelectedStep1Items([product]);
      toast.success('Added to box!');
      // Auto-advance to step 2 after a short delay
      setTimeout(() => {
        setCurrentStep(2);
      }, 500);
    } else if (step === 2) {
      if (selectedStep2Items.length >= 2) {
        toast.error('You can only select 2 premium perfumes');
        return;
      }
      setSelectedStep2Items([...selectedStep2Items, product]);
      toast.success('Added to box!');
    }
  };

  const handleRemoveFromBox = (productId, step) => {
    if (step === 1) {
      setSelectedStep1Items(selectedStep1Items.filter(item => item.id !== productId));
    } else if (step === 2) {
      setSelectedStep2Items(selectedStep2Items.filter(item => item.id !== productId));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    selectedStep1Items.forEach(item => total += item.price);
    selectedStep2Items.forEach(item => total += item.price);
    return total;
  };

  const handleProceedToCheckout = () => {
    if (selectedStep1Items.length === 0 || selectedStep2Items.length < 2) {
      toast.error('Please complete both steps');
      return;
    }
    
    // Add all items to cart
    selectedStep1Items.forEach(item => addItem(item, 1));
    selectedStep2Items.forEach(item => addItem(item, 1));
    
    toast.success('Items added to cart!');
    navigate('/checkout');
  };

  const currentProducts = currentStep === 1 ? step1Products : step2Products;
  const selectedItems = currentStep === 1 ? selectedStep1Items : selectedStep2Items;
  const maxSelection = currentStep === 1 ? 1 : 2;
  const total = calculateTotal();

  return (
    <>
      <Header />
      <div className={`min-h-screen bg-white flex flex-col transition-all duration-300 pt-16 ${isSidebarOpen ? 'md:ml-80 md:w-[calc(100%-20rem)]' : 'md:w-full'}`}>
        {/* Promotional Banner */}
        <div className="bg-black text-white py-2 md:py-3 relative overflow-hidden w-full">
          <div className="flex items-center justify-center relative min-h-[32px] md:min-h-[40px]">
            <button 
              className="absolute left-2 md:left-4 z-10 p-1.5 flex items-center justify-center"
              onClick={() => {
                // Navigate to previous offer (can be implemented with state)
              }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-300 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-[10px] md:text-xs lg:text-sm font-medium text-center px-10 md:px-16 w-full max-w-full flex items-center justify-center">
              FLAT 5% OFF ON PREPAID ORDERS
            </div>
            <button 
              className="absolute right-2 md:right-4 z-10 p-1.5 flex items-center justify-center"
              onClick={() => {
                // Navigate to next offer (can be implemented with state)
              }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-300 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 container mx-auto px-3 md:px-4 py-3 md:py-6 max-w-full overflow-x-hidden">
          {/* Page Title - Hidden on mobile */}
          <div className="mb-3 md:mb-6 hidden md:block">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">Build Your Own Combo</h1>
          </div>

          {/* Step Indicators */}
          <div className="flex items-center justify-center mb-4 md:mb-8 gap-2 md:gap-4 px-2">
            {/* STEP 1 */}
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className={`flex flex-col items-center gap-1 ${currentStep >= 1 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-5 h-5 md:w-8 md:h-8 border-2 rounded flex items-center justify-center text-[10px] md:text-sm font-bold transition-all ${
                  currentStep >= 1 && selectedStep1Items.length > 0
                    ? 'bg-black border-black text-white' 
                    : currentStep >= 1
                    ? 'bg-white border-black text-black'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  {selectedStep1Items.length > 0 ? '✓' : '1'}
                </div>
                <div className="text-center">
                  <p className={`text-[10px] md:text-sm font-semibold ${currentStep >= 1 ? 'text-black' : 'text-gray-400'}`}>
                    STEP 1
                  </p>
                  <p className={`text-[9px] md:text-xs leading-tight ${currentStep >= 1 ? 'text-gray-700' : 'text-gray-400'}`}>
                    Any 1 Gift Set
                  </p>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className={`h-0.5 md:h-1 flex-1 max-w-[40px] md:max-w-[120px] ${currentStep >= 2 ? 'bg-black' : 'bg-gray-300'}`}></div>

            {/* STEP 2 */}
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className={`flex flex-col items-center gap-1 ${currentStep >= 2 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-5 h-5 md:w-8 md:h-8 border-2 rounded flex items-center justify-center text-[10px] md:text-sm font-bold transition-all ${
                  currentStep >= 2 && selectedStep2Items.length >= 2
                    ? 'bg-black border-black text-white' 
                    : currentStep >= 2
                    ? 'bg-white border-black text-black'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  {selectedStep2Items.length >= 2 ? '✓' : '2'}
                </div>
                <div className="text-center">
                  <p className={`text-[10px] md:text-sm font-semibold ${currentStep >= 2 ? 'text-black' : 'text-gray-400'}`}>
                    STEP 2
                  </p>
                  <p className={`text-[9px] md:text-xs leading-tight ${currentStep >= 2 ? 'text-gray-700' : 'text-gray-400'}`}>
                    Any 2 Premium Perfumes
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4 mb-20 md:mb-8">
            {currentProducts.map((product) => {
              const isSelected = selectedItems.some(item => item.id === product.id);
              const canSelect = selectedItems.length < maxSelection;
              
              return (
                <div 
                  key={product.id} 
                  className={`bg-white rounded-xl overflow-hidden border-2 transition-all ${
                    isSelected 
                      ? 'border-black shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {/* Product Image */}
                  <div className="relative px-2 md:px-3 pt-2 md:pt-3 pb-1 md:pb-2">
                    <div className="relative w-full h-28 sm:h-36 md:h-48 bg-gray-50 rounded-lg overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Image dots indicator - below image */}
                    <div className="flex justify-center gap-1 mt-1.5 md:mt-2">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div 
                          key={dot}
                          className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${dot === 1 ? 'bg-gray-800' : 'bg-gray-300'}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="px-2 md:px-3 pb-2 md:pb-3">
                    {/* Product Name */}
                    <h3 className="font-semibold text-[11px] md:text-sm text-gray-800 mb-1 md:mb-2 line-clamp-2 min-h-[2.25rem] md:min-h-[2.5rem]">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-0.5 md:gap-1 mb-1.5 md:mb-2 flex-wrap">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-[11px] md:text-sm font-semibold text-gray-800">{product.rating}</span>
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-500 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[9px] md:text-xs text-gray-600">({product.reviews} Reviews)</span>
                    </div>

                    {/* Add to Box Button */}
                    {isSelected ? (
                      <button
                        onClick={() => handleRemoveFromBox(product.id, currentStep)}
                        className="w-full bg-gray-800 text-white py-1.5 md:py-2.5 rounded-md font-semibold text-[10px] md:text-sm hover:bg-gray-700 transition-colors"
                      >
                        REMOVE FROM BOX
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToBox(product, currentStep)}
                        disabled={!canSelect}
                        className={`w-full py-1.5 md:py-2.5 rounded-md font-semibold text-[10px] md:text-sm transition-colors ${
                          canSelect
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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

          {/* Step Navigation (Desktop) */}
          <div className="hidden md:flex justify-center gap-4 mb-6">
            {currentStep === 1 ? (
              <button
                onClick={() => {
                  if (selectedStep1Items.length > 0) {
                    setCurrentStep(2);
                  } else {
                    toast.error('Please select 1 gift set first');
                  }
                }}
                disabled={selectedStep1Items.length === 0}
                className={`px-6 py-2.5 rounded-lg font-semibold transition ${
                  selectedStep1Items.length > 0
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Step 2
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-2.5 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              >
                Back to Step 1
              </button>
            )}
          </div>

          {/* Total Price Section */}
          <div className="fixed bottom-0 left-0 right-0 md:relative md:bottom-auto bg-white border-t border-gray-200 md:border-0 md:bg-transparent py-2.5 md:py-4 px-3 md:px-0 md:mt-6 z-50 safe-area-inset-bottom">
            <div className="container mx-auto flex items-center justify-between max-w-6xl">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg overflow-hidden hidden md:block">
                  <img 
                    src={img2616} 
                    alt="Combo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs md:text-base font-semibold text-gray-800">Premium Perfume Combo</p>
                  <p className="text-[10px] md:text-sm text-gray-600 hidden md:block">
                    {selectedStep1Items.length} Gift Set{selectedStep1Items.length !== 1 ? 's' : ''} • {selectedStep2Items.length} Perfume{selectedStep2Items.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-base md:text-2xl font-bold text-black">Total: ₹{total.toLocaleString('en-IN')}/-</p>
                {selectedStep1Items.length > 0 && selectedStep2Items.length >= 2 && (
                  <button
                    onClick={handleProceedToCheckout}
                    className="mt-1.5 md:mt-2 px-3 md:px-6 py-1.5 md:py-2.5 bg-black text-white rounded-lg font-semibold text-[10px] md:text-sm hover:bg-gray-800 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ComboDeals;

