import { getMockOrders } from './mockDataService';

const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

export const orderService = {
  createOrder: async (orderData) => {
    await delay();
    const order = {
      id: 'ORD' + Date.now(),
      ...orderData,
      date: new Date().toISOString(),
      status: 'pending',
      trackingNumber: 'TRK' + Date.now()
    };
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    return { data: order, success: true };
  },
  
  getUserOrders: async () => {
    await delay();
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const mockOrders = getMockOrders();
    return { data: [...mockOrders, ...orders].reverse(), success: true };
  },
  
  getOrderById: async (orderId) => {
    await delay();
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const mockOrders = getMockOrders();
    const allOrders = [...mockOrders, ...orders];
    const order = allOrders.find(o => o.id === orderId);
    
    if (!order) {
      throw new Error('Order not found');
    }
    
    return { data: order, success: true };
  },
  
  cancelOrder: async (orderId) => {
    await delay();
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: 'cancelled' } : order
    );
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    return { success: true };
  }
};

