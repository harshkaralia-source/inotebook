import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import NoteState from './context/notes/NoteState'

const App = () => {
  return (
    <div>
      <NoteState>
        <Navbar />
        <div className="container">

          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
          </Routes>
        </div>
      </NoteState>
    </div>
  )
}

export default App
