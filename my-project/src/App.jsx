import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Admin from './pages/Admin'
import Home from './pages/Home'
import ShopAll from './pages/ShopAll'
import CrazyDeals from './pages/CrazyDeals'
import Account from './pages/Account'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/crazy-deals" element={<CrazyDeals />} />
        <Route path="/account" element={<Account />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
