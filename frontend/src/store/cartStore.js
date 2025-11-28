import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, quantity = 1, size = null) => {
        set((state) => {
          const existingItem = state.items.find(
            item => item.id === product.id && item.size === size
          );
          
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.id === product.id && item.size === size
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }
          
          return {
            items: [...state.items, {
              ...product,
              quantity,
              size: size || (product.sizes?.[2]?.size || product.sizes?.[0]?.size || '100ml'),
              selectedPrice: size 
                ? product.sizes?.find(s => s.size === size)?.price 
                : (product.sizes?.[2]?.price || product.sizes?.[0]?.price || product.price || 699)
            }]
          };
        });
      },
      
      removeItem: (productId, size = null) => {
        set((state) => ({
          items: state.items.filter(item => 
            !(item.id === productId && (size === null || item.size === size))
          )
        }));
      },
      
      updateQuantity: (productId, quantity, size = null) => {
        if (quantity <= 0) {
          get().removeItem(productId, size);
          return;
        }
        
        set((state) => ({
          items: state.items.map(item =>
            item.id === productId && (size === null || item.size === size)
              ? { ...item, quantity }
              : item
          )
        }));
      },
      
      clearCart: () => set({ items: [] }),
      
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.selectedPrice || item.price || 699;
          return total + (price * item.quantity);
        }, 0);
      },
      
      isInCart: (productId, size = null) => {
        return get().items.some(item => 
          item.id === productId && (size === null || item.size === size)
        );
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

