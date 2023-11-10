import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BadAlert from './BadAlert'
function FormLogin({ img, setAutenticado }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    title: "",
    message: "",
  });


  const handleSubmitLogin = e => {
    e.preventDefault()
    const userLogin = {
      email: email,
      user_password: password
    }

    axios.post("http://127.0.0.1:5000/users/login", userLogin)
      .then(res => {
        localStorage.setItem("session_token", res.data.Data.session_token)
        localStorage.setItem("username", res.data.Data.username)
        setAutenticado(true)
      })
      .catch(err => {
        setErrorMessage({
          status: true,
          title: "Error",
          message: err.response.data.Error
        })
        console.log(err);
      })
  }

  // REINICIA EL MENSAJE DE ERROR
  useEffect(() => {
    if (errorMessage.status === true) {
      setTimeout(
        () => setErrorMessage({ status: false, title: "", message: "" }),
        2500
      );
    }
  }, [errorMessage.status]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };


  return (
    <motion.div 
    variants={containerVariants}
      initial='hidden'
      animate='visible'
    className='bg-white flex rounded-lg drop-shadow-lg items-center'>
      <form onSubmit={handleSubmitLogin} className='w-full py-10 lg:w-1/2 px-5 md:px-16'>
        <h3 className='block text-4xl text-center lg:text-start font-medium italic mb-12'>Bienvenido de nuevo</h3>

        <div className='flex flex-col gap-2 mb-8'>
          <label htmlFor="email" className='text-xl'>Correo</label>
          <input
            type="email"
            placeholder="Escribe tu correo"
            id="email"
            required
            className='text-lg placeholder:text-[#b1b1b1] placeholder:italic placeholder:font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg 
            ring-0
            focus:outline-none focus:border-sky-500'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2 mb-6'>
          <label htmlFor="password" className='text-xl'>Contraseña</label>
          <input
            type="password"
            placeholder="*****"
            id="password"
            required
            className='text-lg placeholder:text-[#b1b1b1] placeholder:italic placeholder:font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg 
            ring-0
            focus:outline-none focus:border-sky-500'
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className='flex justify-end'>
          <Link to="/account-recovery" className='text-lg text-end font-semibold text-[#45474B]'>¿Olvidaste tu contraseña?</Link>
        </div>

        <div className='flex flex-col mt-12'>
          {errorMessage.status && (
            <div className="mb-3">
              <BadAlert
                title={errorMessage.title}
                message={errorMessage.message}
              />
            </div>
          )}

          <button type="submit" className='bg-[#1F4D36] h-14 text-white text-xl rounded-lg mb-12'>
            Iniciar Sesión
          </button>
        </div>

        <p className='text-[#B1B1B1] italic font-medium text-lg text-center'>¿Aun no tienes cuenta? <Link to="/sign-up" className='text-[#45474B]'>Crear Cuenta</Link></p>
      </form>

      <div className='w-1/2 p-1 hidden lg:block object-contain'>
        <img
          src={img}
          alt="Image login"
          className='bg-center object-cover rounded-r-lg drop-shadow-md'
        />
      </div>
    </motion.div>
  )
}

export default FormLogin