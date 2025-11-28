import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Wishlist from './components/Wishlist'
import Account from './components/Account'
import Cart from './components/Cart'
import OrderSummary from './components/OrderSummary'
import Payment from './components/Payment'
import OrderSuccess from './components/OrderSuccess'
import Orders from './components/Orders'
import Addresses from './components/Addresses'
import Login from './components/Login'
import Signup from './components/Signup'
import FAQs from './components/FAQs'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'
import Deals from './components/Deals'
import ComboDeals from './components/ComboDeals'
import './App.css'

// Smooth Scroll Setup Component
function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/combo-deals/:id" element={<ComboDeals />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <AppRoutes />
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App
