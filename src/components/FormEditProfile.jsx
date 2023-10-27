import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BadAlert from './BadAlert'
import InfoAlert from './InfoAlert'
import axios from 'axios'

// IMAGENES E ICONOS
import FlechaVolver from "../assets/icons/flecha-volver.svg"
import EyeOpen from "../assets/icons/eyes-open.svg"
import EyeClosed from "../assets/icons/eyes-closed.svg"

function FormEditProfile() {

    const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [verPassword, setVerPassword] = useState(false)
  const [editar, setEditar] = useState(true)
  const [infoMessage, setInfoMessage] = useState({
    status: false,
    title: "",
    message: ""
  })
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    title: "",
    message: ""  
  })

  const getUserData = async () => {
    const sessionToken = localStorage.getItem("session_token")
    axios.get(`http://127.0.0.1:5000/users/get-user-data/${sessionToken}`)
      .then(res => {
        if (res.data.Google) {
          setEditar(false)
        }
        setUsername(res.data.Data.username)
        setEmail(res.data.Data.email)
        setUserPassword(res.data.Data.user_password)
      })
      .catch(err => {
        console.log(err.response.data.Error)
      })
  }

  const visibilidad = () => {
    setVerPassword(!verPassword)
  }

  const editUserData = e => {
    e.preventDefault()

    const sessionToken = localStorage.getItem("session_token")

    const userData = {
      username: username,
      email: email,
      user_password: userPassword
    }

    axios.put(`http://127.0.0.1:5000/users/${sessionToken}`, userData)
      .then(res => {
        console.log(res)
        setInfoMessage({
          status:true,
          title:"Ok",
          message:res.data.Message
        })

        localStorage.setItem("username", username)
      })
      .catch(err => {
        console.error(err.response.data.Error)
        setErrorMessage({
            status: true,
            title: "Oops",
            message: err.response.data.Error
        })
      })
  }

  useEffect(() => {
    getUserData();
  }, [])

  // REINICIA LA ALERTA
  useEffect(() => {
    if (infoMessage.status === true) {
      setTimeout(
        () => setInfoMessage({ status: false, title: "", message: "" }),
        2500
      );
    }
  }, [infoMessage.status]);

  useEffect(() => {
    if (errorMessage.status === true) {
      setTimeout(
        () => setErrorMessage({ status: false, title: "", message: "" }),
        2500
      );
    }
  }, [errorMessage.status]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-5 h-4/5 w-4/5 mx-auto my-auto'>
    <div className='flex gap-2 items-center'>
      <Link to="/index">
        <img className="p-2" src={FlechaVolver} alt="Icono flecha" />
      </Link>
      <h3 className='text-2xl'>Editar perfil</h3>
    </div>
    <div className=" flex drop-shadow-lg items-start justify-center">
      
      <form className="w-full lg:w-1/2 px-5" onSubmit={editUserData}>
        <div className="text-center">
          <img
            src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png"
            className="w-40 p-6 h-45 mx-auto my-auto"
          />
          <div className="flex flex-col mb-6">
          </div>
        </div>

        <div className=" flex flex-col gap-2 mb-6">
          <label className="text-xl">Usuario</label>
          <input
            type="text"
            required
            disabled={editar ? false : true}
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
            className="text-lg placeholder-text-[#b1b1b1]  placeholder-font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg  focus-border-sky-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <label className="text-xl">Email</label>
          <input
            type="email"
            required
            disabled={editar ? false : true}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className="text-lg placeholder-text-[#b1b1b1]  placeholder-font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg  focus-border-sky-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 mb-12">
          <label className="text-xl">Contraseña</label>
          <div className="relative"> {/* Agrega un contenedor div */}
            <input
              type={verPassword ? "text" : "password"}
              required
              disabled={editar ? false : true}
              value={userPassword}
              onChange={e => setUserPassword(e.target.value)}
              placeholder="Contraseña"
              className="text-lg w-full placeholder-text-[#b1b1b1] placeholder-font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg focus-border-sky-500 focus:outline-none"
            />
            {verPassword ? (
              <img
                src={EyeOpen}
                alt='Ver contraseña'
                hidden={editar ? false : true}
                onClick={visibilidad}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <img
                src={EyeClosed}
                alt='Dejar de ver contraseña'
                hidden={editar ? false : true}
                onClick={visibilidad}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col mb-6 gap-3">
          {infoMessage.status && (
            <InfoAlert
              title={infoMessage.title}
              message={infoMessage.message}
            />
          )}
        {errorMessage.status && (
            <BadAlert
              title={errorMessage.title}
              message={errorMessage.message}
            />
          )}
          <button 
            type="submit" 
            className="bg-[#1F4D36] h-14 text-white text-xl rounded-lg mb-5"
            disabled={editar ? false : true}
          >
            Actualizar informacion
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default FormEditProfile