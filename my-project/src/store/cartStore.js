import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      coupon: null,
      
      addItem: (product, quantity = 1) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          });
        } else {
          set({
            items: [...items, { ...product, quantity }]
          });
        }
      },
      
      removeItem: (productId) => {
        set({
          items: get().items.filter(item => item.id !== productId)
        });
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
        });
      },
      
      clearCart: () => set({ items: [], coupon: null }),
      
      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      
      applyCoupon: (couponCode) => {
        const validCoupons = {
          'SAVE10': { discount: 10, type: 'percentage' },
          'FLAT50': { discount: 50, type: 'fixed' },
          'WELCOME20': { discount: 20, type: 'percentage' }
        };
        
        if (validCoupons[couponCode]) {
          set({ coupon: { code: couponCode, ...validCoupons[couponCode] } });
          return true;
        }
        return false;
      },
      
      removeCoupon: () => set({ coupon: null }),
      
      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          return total + (parseFloat(item.price) * item.quantity);
        }, 0);
      },
      
      getDiscount: () => {
        const coupon = get().coupon;
        if (!coupon) return 0;
        
        const subtotal = get().getSubtotal();
        if (coupon.type === 'percentage') {
          return (subtotal * coupon.discount) / 100;
        }
        return coupon.discount;
      },
      
      getShipping: () => {
        const subtotal = get().getSubtotal();
        return subtotal > 999 ? 0 : 50;
      },
      
      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscount();
        const shipping = get().getShipping();
        return subtotal - discount + shipping;
      },
      
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

