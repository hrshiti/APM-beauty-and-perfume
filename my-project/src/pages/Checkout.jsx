import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import { orderService } from '../services/orderService';
import toast from 'react-hot-toast';
import Footer from '../components/common/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, getDiscount, getShipping, getTotal, clearCart } = useCartStore();
  const { user, isAuthenticated } = useAuthStore();
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [newAddress, setNewAddress] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    type: 'home'
  });

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const shipping = getShipping();
  const total = getTotal();

  React.useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
      return;
    }
    if (!isAuthenticated) {
      navigate('/login?redirect=/checkout');
      return;
    }
    if (user?.addresses?.length > 0) {
      const defaultAddress = user.addresses.find(addr => addr.isDefault) || user.addresses[0];
      setSelectedAddress(defaultAddress);
    }
  }, [items, isAuthenticated, user, navigate]);

  const handleAddAddress = () => {
    if (!newAddress.name || !newAddress.phone || !newAddress.address || !newAddress.city || !newAddress.state || !newAddress.pincode) {
      toast.error('Please fill all address fields');
      return;
    }
    useAuthStore.getState().addAddress(newAddress);
    toast.success('Address added successfully');
    setNewAddress({ name: '', phone: '', address: '', city: '', state: '', pincode: '', type: 'home' });
    setStep(1);
  };

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error('Please select or add an address');
      return;
    }

    try {
      const order = await orderService.createOrder({
        items,
        address: selectedAddress,
        paymentMethod,
        subtotal,
        discount,
        shipping,
        total
      });

      clearCart();
      toast.success('Order placed successfully!');
      navigate(`/orders/${order.data.id}`);
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    }
  };

  if (items.length === 0 || !isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex flex-col">
      <div className="flex-1 container mx-auto px-3 md:px-4 py-4 md:py-6 md:py-8 max-w-full overflow-x-hidden">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Checkout</h1>

        {/* Steps */}
        <div className="flex items-center justify-center mb-4 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center min-w-max">
            <div className={`flex items-center ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="ml-1.5 md:ml-2 text-xs md:text-sm font-medium">Address</span>
            </div>
            <div className={`w-8 md:w-16 lg:w-24 h-1 mx-1 md:mx-2 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="ml-1.5 md:ml-2 text-xs md:text-sm font-medium">Payment</span>
            </div>
            <div className={`w-8 md:w-16 lg:w-24 h-1 mx-1 md:mx-2 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 3 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="ml-1.5 md:ml-2 text-xs md:text-sm font-medium">Review</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Delivery Address</h2>
                
                {/* Existing Addresses */}
                {user?.addresses?.length > 0 && (
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {user.addresses.map((address) => (
                      <label
                        key={address.id}
                        className={`block p-3 md:p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedAddress?.id === address.id
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="address"
                          value={address.id}
                          checked={selectedAddress?.id === address.id}
                          onChange={() => setSelectedAddress(address)}
                          className="mr-2 md:mr-3"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm md:text-base">{address.name}</p>
                          <p className="text-xs md:text-sm text-gray-600 break-words">{address.address}, {address.city}, {address.state} - {address.pincode}</p>
                          <p className="text-xs md:text-sm text-gray-600">{address.phone}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                )}

                {/* Add New Address */}
                <div className="border-t pt-4 md:pt-6">
                  <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Add New Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                      className="px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={newAddress.phone}
                      onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                      className="px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      value={newAddress.address}
                      onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                      className="px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 md:col-span-2"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      className="px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      className="px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      placeholder="Pincode"
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                      className="px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button
                    onClick={handleAddAddress}
                    className="mt-3 md:mt-4 px-4 md:px-6 py-2 text-sm md:text-base bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-semibold"
                  >
                    Add Address
                  </button>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedAddress}
                  className="mt-4 md:mt-6 w-full bg-black text-white py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Payment Method</h2>
                <div className="space-y-2 md:space-y-3">
                  <label className="flex items-center p-3 md:p-4 border-2 rounded-lg cursor-pointer hover:border-purple-600 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2 md:mr-3"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm md:text-base">Cash on Delivery</p>
                      <p className="text-xs md:text-sm text-gray-600">Pay when you receive</p>
                    </div>
                  </label>
                  <label className="flex items-center p-3 md:p-4 border-2 rounded-lg cursor-pointer hover:border-purple-600 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      checked={paymentMethod === 'online'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2 md:mr-3"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm md:text-base">Online Payment</p>
                      <p className="text-xs md:text-sm text-gray-600">Credit/Debit Card, UPI, Net Banking</p>
                    </div>
                  </label>
                </div>
                <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:border-gray-400 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-black text-white py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-800 transition-colors"
                  >
                    Continue to Review
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Order Review</h2>
                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div>
                    <h3 className="font-semibold text-sm md:text-base mb-1.5 md:mb-2">Delivery Address</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{selectedAddress?.name}</p>
                    <p className="text-gray-600 text-xs md:text-sm break-words">{selectedAddress?.address}, {selectedAddress?.city}, {selectedAddress?.state} - {selectedAddress?.pincode}</p>
                    <p className="text-gray-600 text-xs md:text-sm">{selectedAddress?.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base mb-1.5 md:mb-2">Payment Method</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base mb-1.5 md:mb-2">Order Items</h3>
                    <div className="space-y-1.5 md:space-y-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-xs md:text-sm">
                          <span className="flex-1 min-w-0 pr-2">{item.name} x {item.quantity}</span>
                          <span className="flex-shrink-0">₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:border-gray-400 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-black text-white py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-800 transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1 mt-4 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 sticky top-20">
              <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-semibold text-green-600">-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-3">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

