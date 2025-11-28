import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { orderService } from '../services/orderService';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// Import images from assets folder
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8-222.jpg';
import img2_1 from '../assets/2_1.jpg';
import img3_1 from '../assets/3_1.jpg';
import img4_1 from '../assets/4_1.jpg';
import img5_1 from '../assets/5_1.jpg';
import img4_2 from '../assets/4----2.jpg';
import img6487 from '../assets/IMG_6487.jpg';
import img6503 from '../assets/IMG_6503.jpg';
import img9720 from '../assets/IMG_9720.JPG';

// Image mapping array - cycle through available images
const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img2_1, img3_1, img4_1, img5_1, img4_2, img6487, img6503, img9720];

// Function to get image for order item
const getOrderItemImage = (item, index) => {
  // If item has image property, try to use it
  if (item.image && item.image !== '' && item.image !== '/placeholder.jpg') {
    return item.image;
  }
  
  // If item has product with image
  if (item.product?.image && item.product.image !== '' && item.product.image !== '/placeholder.jpg') {
    return item.product.image;
  }
  
  // Use index to cycle through available images
  return imageArray[index % imageArray.length];
};

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const fetchOrder = async () => {
    try {
      const response = await orderService.getOrderById(id);
      setOrder(response.data);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Order not found</p>
          <Link
            to="/orders"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex flex-col pt-16">
        <div className="flex-1 container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-full overflow-x-hidden">
        <Link
          to="/orders"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4 md:mb-6 text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Orders
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1.5 md:mb-2">Order #{order.id}</h1>
              <p className="text-gray-600 text-xs md:text-sm">
                Placed on {new Date(order.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            <span className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mt-3 md:mt-0 ${getStatusColor(order.status)}`}>
              {order.status.toUpperCase()}
            </span>
          </div>

          {order.trackingNumber && (
            <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-50 rounded-lg">
              <p className="text-xs md:text-sm text-gray-600 mb-0.5 md:mb-1">Tracking Number</p>
              <p className="font-semibold text-sm md:text-base break-all">{order.trackingNumber}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Order Items</h2>
              <div className="space-y-3 md:space-y-4">
                {order.items?.map((item, idx) => {
                  const itemImage = getOrderItemImage(item, idx);
                  const itemName = item.name || item.product?.name || 'Product';
                  
                  return (
                    <div key={item.id || idx} className="flex gap-3 md:gap-4 pb-3 md:pb-4 border-b last:border-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={itemImage}
                          alt={itemName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm md:text-base mb-0.5 md:mb-1 line-clamp-2">{itemName}</h3>
                        <p className="text-xs md:text-sm text-gray-600">Quantity: {item.quantity || 1}</p>
                        <p className="font-semibold mt-1.5 md:mt-2 text-sm md:text-base">
                          ₹{((parseFloat(item.price || item.product?.price || 0)) * (item.quantity || 1)).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 mt-4 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 sticky top-20">
              <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Order Summary</h2>
              <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{order.subtotal?.toFixed(2) || '0.00'}</span>
                </div>
                {order.discount > 0 && (
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-semibold text-green-600">-₹{order.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">{order.shipping === 0 ? 'Free' : `₹${order.shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-base md:text-lg border-t border-gray-300 pt-2 md:pt-3">
                  <span>Total</span>
                  <span>₹{order.total?.toFixed(2) || '0.00'}</span>
                </div>
              </div>

              {order.address && (
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t">
                  <h3 className="font-semibold text-sm md:text-base mb-1.5 md:mb-2">Delivery Address</h3>
                  <p className="text-xs md:text-sm text-gray-600 break-words">{order.address.name}</p>
                  <p className="text-xs md:text-sm text-gray-600 break-words">{order.address.address}</p>
                  <p className="text-xs md:text-sm text-gray-600 break-words">
                    {order.address.city}, {order.address.state} - {order.address.pincode}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">{order.address.phone}</p>
                </div>
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

export default OrderDetail;

