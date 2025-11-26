import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      login: async (email, password) => {
        const user = {
          id: '1',
          name: 'John Doe',
          email: email,
          phone: '+91 98765 43210',
          addresses: [
            {
              id: '1',
              type: 'home',
              name: 'John Doe',
              phone: '+91 98765 43210',
              address: '123 Main Street',
              city: 'Mumbai',
              state: 'Maharashtra',
              pincode: '400001',
              isDefault: true
            }
          ]
        };
        const token = 'mock_token_' + Date.now();
        set({ user, token, isAuthenticated: true });
        return { success: true, user, token };
      },
      
      register: async (userData) => {
        const user = {
          id: '1',
          name: userData.name || 'User',
          email: userData.email,
          phone: userData.phone || '',
          addresses: []
        };
        const token = 'mock_token_' + Date.now();
        set({ user, token, isAuthenticated: true });
        return { success: true, user, token };
      },
      
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
      
      updateUser: (userData) => {
        set((state) => ({
          user: { ...state.user, ...userData }
        }));
      },
      
      addAddress: (address) => {
        set((state) => ({
          user: {
            ...state.user,
            addresses: [...(state.user?.addresses || []), { ...address, id: Date.now().toString() }]
          }
        }));
      },
      
      updateAddress: (addressId, addressData) => {
        set((state) => ({
          user: {
            ...state.user,
            addresses: state.user.addresses.map(addr =>
              addr.id === addressId ? { ...addr, ...addressData } : addr
            )
          }
        }));
      },
      
      removeAddress: (addressId) => {
        set((state) => ({
          user: {
            ...state.user,
            addresses: state.user.addresses.filter(addr => addr.id !== addressId)
          }
        }));
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

