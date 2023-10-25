import React from 'react'
import FormLogin from '../components/FormLogin'
import FormsFooter from '../components/FormsFooter'

// IMAGENES E ICONOS
import LoginImage from "../assets/images/login-image.jpg"

function Login() {
  return (
    <>
        <main className='bg-[#F2F4EA] px-24 py-20 lg:py-14'>
            <FormLogin
                img={LoginImage}
            />
        </main>

        <FormsFooter/>
    </>
  )
}

export default Login