import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Admin from './pages/Admin'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
