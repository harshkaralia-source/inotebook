import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        <Route path='/about' element={
          <>
            <Navbar />
            <About />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
