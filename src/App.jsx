import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Error404 from './components/Error404'

// Rutas
import AccountRecovery from './routes/AccountRecovery'
import EditProfile from './routes/EditProfile'
import Home from './routes/Home'
import IndexApp from './routes/IndexApp'
import Login from './routes/Login'
import ResetPassword from './routes/ResetPassword'
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
        <Route path='/*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
