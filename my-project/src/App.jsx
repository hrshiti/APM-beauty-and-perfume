import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Admin from './components/Admin/Admin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Vintage Beauty</h1>
              <p className="text-gray-600 mb-4">Perfume E-Commerce Platform</p>
              <a href="/admin" className="text-blue-600 hover:underline">
                Go to Admin Dashboard
              </a>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
