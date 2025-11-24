import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Admin from './module/Admin/Admin'
import Home from './pages/Home'
import ShopAll from './pages/ShopAll'
import CrazyDeals from './pages/CrazyDeals'
import Account from './pages/Account'

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/admin/*" element={<Admin />} />
=======
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/crazy-deals" element={<CrazyDeals />} />
        <Route path="/account" element={<Account />} />
>>>>>>> 49c0ba5e9bf3e1aeb445ce2b89f9be9a67295a64
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
