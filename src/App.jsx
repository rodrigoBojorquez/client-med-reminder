import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AccountRecovery from './routes/AccountRecovery'
import Home from './routes/Home'
import IndexApp from './routes/IndexApp'
import Login from './routes/Login'
import ResetPassword from './routes/ResetPassword'
import SignUp from './routes/SignUp'
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
        <Route path='/indexapp' element={<IndexApp/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
