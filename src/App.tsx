import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Cheesecake from './routes/Cheesecake'
import Home from './routes/Home'
import Burger from './routes/Burger'
import Navbar from './routes/Navbar'
import './App.css'

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cheesecake" element={<Cheesecake />} />
            <Route path="/burger" element={<Burger />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  )
}

export default App
