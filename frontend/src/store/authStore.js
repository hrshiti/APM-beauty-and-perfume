import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      
      login: (userData) => {
        set({
          user: userData,
          isAuthenticated: true
        });
      },
      
      logout: () => {
        set({
          user: null,
          isAuthenticated: false
        });
      },
      
      signup: (userData) => {
        set({
          user: userData,
          isAuthenticated: true
        });
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

