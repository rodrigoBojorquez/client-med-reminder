import { useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from './routes/Home'

// Rutas

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
