import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './routes/Home'
import D3Chart from './routes/D3Chart'

function App() {

  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/d3" element={<D3Chart />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
     
    </div>
  )
}

export default App
