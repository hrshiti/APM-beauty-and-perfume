import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'
import Admin from './module/Admin/Admin'
import Home from './pages/Home'
import ShopAll from './pages/ShopAll'
import CrazyDeals from './pages/CrazyDeals'
import Account from './pages/Account'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Search from './pages/Search'
import Category from './pages/Category'
import Wishlist from './pages/Wishlist'
import Orders from './pages/Orders'
import OrderDetail from './pages/OrderDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import ComboDeals from './pages/ComboDeals'
import Addresses from './pages/Addresses'
import Settings from './pages/Settings'
import Reviews from './pages/Reviews'
import Notifications from './pages/Notifications'
import HelpSupport from './pages/HelpSupport'
import FAQs from './pages/FAQs'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CartDrawer from './components/cart/CartDrawer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop-all" element={<ShopAll />} />
            <Route path="/crazy-deals" element={<CrazyDeals />} />
            <Route path="/combo-deals/:id" element={<ComboDeals />} />
            <Route path="/account" element={<Account />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/search" element={<Search />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetail />} />
            <Route path="/addresses" element={<Addresses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/help-support" element={<HelpSupport />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <CartDrawer />
        <Toaster 
          position="top-right" 
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 2000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 3000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
