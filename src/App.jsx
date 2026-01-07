import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewYear from './pages/NewYear'
import Checkout from './pages/Checkout'
import OptinPage from './pages/OptinPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OptinPage />} />
                <Route path="/xmas" element={<Home />} />
                <Route path="/newyear" element={<NewYear />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    )
}

export default App
