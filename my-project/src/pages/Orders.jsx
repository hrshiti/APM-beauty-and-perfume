import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { orderService } from '../services/orderService';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// Import images from assets vintage folder
import img1 from '../assets/images vintage/1.jpg';
import img2 from '../assets/images vintage/2.jpg';
import img3 from '../assets/images vintage/3.jpg';
import img4 from '../assets/images vintage/4.jpg';
import img5 from '../assets/images vintage/5.jpg';
import img6 from '../assets/images vintage/6.jpg';
import img7 from '../assets/images vintage/7.jpg';
import img8 from '../assets/images vintage/8-222.jpg';
import img2_1 from '../assets/images vintage/2_1.jpg';
import img3_1 from '../assets/images vintage/3_1.jpg';
import img4_1 from '../assets/images vintage/4_1.jpg';
import img5_1 from '../assets/images vintage/5_1.jpg';
import img4_2 from '../assets/images vintage/4----2.jpg';
import img6487 from '../assets/images vintage/IMG_6487.jpg';
import img6503 from '../assets/images vintage/IMG_6503.jpg';
import img9720 from '../assets/images vintage/IMG_9720.JPG';

// Image mapping array - cycle through available images
const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img2_1, img3_1, img4_1, img5_1, img4_2, img6487, img6503, img9720];

// Function to get image for order item
const getOrderItemImage = (item, index) => {
  // If item has image property, try to use it
  if (item.image) {
    return item.image;
  }
  
  // If item has product with image
  if (item.product?.image) {
    return item.product.image;
  }
  
  // Use index to cycle through available images
  return imageArray[index % imageArray.length];
};

const Orders = () => {
  const { isAuthenticated } = useAuthStore();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const fetchOrders = async () => {
    try {
      const response = await orderService.getUserOrders();
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Please login to view your orders</p>
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex flex-col pt-16">
        <div className="flex-1 container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-full overflow-x-hidden">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">My Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center py-8 md:py-12 bg-white rounded-lg shadow-sm">
            <svg className="w-16 h-16 md:w-24 md:h-24 mx-auto text-gray-300 mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1.5 md:mb-2">No orders yet</h2>
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">Start shopping to see your orders here</p>
            <Link
              to="/shop-all"
              className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm md:text-base"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-3 md:space-y-4">
            {orders.map((order) => {
              // Get order items with images
              const orderItems = order.items || [];
              
              return (
                <Link
                  key={order.id}
                  to={`/orders/${order.id}`}
                  className="block bg-white rounded-lg shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                    {/* Product Images */}
                    {orderItems.length > 0 && (
                      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                        <div className="flex -space-x-2 md:-space-x-3">
                          {orderItems.slice(0, 3).map((item, idx) => {
                            const itemImage = getOrderItemImage(item, idx);
                            return (
                              <div
                                key={idx}
                                className="relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 border-white shadow-sm bg-gray-100"
                                style={{ zIndex: orderItems.length - idx }}
                              >
                                <img
                                  src={itemImage}
                                  alt={item.name || item.product?.name || 'Product'}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            );
                          })}
                        </div>
                        {orderItems.length > 3 && (
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gray-100 border-2 border-white shadow-sm flex items-center justify-center">
                            <span className="text-xs md:text-sm font-bold text-gray-600">+{orderItems.length - 3}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Order Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-1.5 md:mb-2">
                        <h3 className="font-bold text-base md:text-lg">Order #{order.id}</h3>
                        <span className={`px-2.5 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold ${getStatusColor(order.status)}`}>
                          {order.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm mb-1 md:mb-2">
                        Placed on {new Date(order.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <p className="text-gray-600 text-xs md:text-sm mb-2">
                        {order.items?.length || 0} item(s) • ₹{order.total?.toFixed(2) || '0.00'}
                      </p>
                      {/* Product Names Preview */}
                      {order.items && order.items.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {order.items.slice(0, 2).map((item, idx) => (
                            <span key={idx} className="text-xs md:text-sm text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                              {item.name || item.product?.name || 'Product'}
                            </span>
                          ))}
                          {order.items.length > 2 && (
                            <span className="text-xs md:text-sm text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                              +{order.items.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* View Details Button */}
                    <div className="flex items-center gap-2 self-start md:self-center">
                      <span className="text-purple-600 font-semibold text-sm md:text-base">View Details</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Orders;

