import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

// Rutas
import AccountRecovery from './routes/AccountRecovery'
import Home from './routes/Home'
import IndexApp from './routes/IndexApp'
import Login from './routes/Login'
import ResetPassword from './routes/ResetPassword'
import EditProfile from './routes/EditProfile'
import SignUp from './routes/SignUp'

function App() {

  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("session_token")
    if (token !== null) {
      axios.get(`http://127.0.0.1:5000/users/${token}`)
        .then( res =>{
          if(res.data.Status === true){
            setAutenticado(true)
          }
          else {
            setAutenticado(false)
          }
        })
        .catch(err =>{
          console.error("Ha ocurrido un error", err)
        })
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/sign-up" element={autenticado ? <Navigate to="/index" /> : <SignUp/>} />
        <Route path="/login" element={autenticado ? <Navigate to="/index" /> : <Login setAutenticado={setAutenticado} />} />
        <Route path='/account-recovery' element={<AccountRecovery/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/index' element={autenticado ? <IndexApp setAutenticado={setAutenticado}/> : <Navigate to="/login" />} />
        <Route path='/edit-profile' element={autenticado ? <EditProfile/> : <Navigate to="/login"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
