import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './components/Error404'
import AccountRecovery from './routes/AccountRecovery'
import Calendario from './routes/Calendario'
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
        <Route path='/index' element={<IndexApp/>} />
        <Route path='/calendario' element={<Calendario/>} />
        <Route path='/*' element={<Error404/>} />




      </Routes>
    </BrowserRouter>
  )
}

export default App
