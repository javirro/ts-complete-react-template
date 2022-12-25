import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cheesecake from './routes/Cheesecake'
import Home from './routes/Home'
import Burger from './routes/Burger'
import './App.css'
import Navbar from './routes/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cheesecake" element={<Cheesecake />} />
          <Route path="/burger" element={<Burger />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
