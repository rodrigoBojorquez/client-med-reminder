import { useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import AccountRecovery from './routes/AccountRecovery'
import ResetPassword from './routes/ResetPassword'

// Rutas

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/account-recovery' element={<AccountRecovery/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
