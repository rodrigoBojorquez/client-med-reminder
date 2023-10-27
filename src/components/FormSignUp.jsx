import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import InfoAlert from './InfoAlert';
import BadAlert from './BadAlert';

function FormSignUp({ img}) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({
        status: false,
        title: "",
        message: "",
    });
    const [infoMessage, setInfoMessage] = useState({
        status: false,
        title: "",
        message: "",
    });

    const handleSubmitSignUp = e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage({
                status: true,
                title: "Error",
                message: "Las contraseñas deben ser iguales",
            });
        }
        else {
            const user_data = {
                username: username,
                email: email,
                user_password: password,
            }

            axios.post("http://127.0.0.1:5000/users/sign-up", user_data)
                .then(res => {
                    setInfoMessage({
                        status: true,
                        title: "Bienvenido",
                        message: "Su cuenta se ha creado con exito",
                    });
                    setTimeout(() => {
                        window.location.href = "/login"
                    }, 3000);
                })
                .catch(err => {
                    setErrorMessage({
                        status: true,
                        title: "Error",
                        message: err.response.data.Error,
                    });
                })
        }
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

    useEffect(() => {
        if (infoMessage.status === true) {
            setTimeout(
                () => setInfoMessage({ status: false, title: "", message: "" }),
                2500
            );
        }
    }, [infoMessage.status]);

    return (
        <div className='bg-white flex rounded-lg drop-shadow-lg items-center'>
            <form onSubmit={handleSubmitSignUp} className='w-full py-10 lg:w-1/2 px-5 md:px-16'>
                <h3 className='block text-4xl text-center lg:text-start font-medium italic mb-12'>Crea tu cuenta</h3>

                <div className="flex flex-col gap-2 mb-8">
                    <label htmlFor="username" className="text-xl">
                        Nombre de usuario
                    </label>
                    <input
                        type="text"
                        placeholder="Escribe tu nombre de usuario"
                        id="username"
                        required
                        className="text-lg placeholder:text-[#b1b1b1] placeholder:italic placeholder:font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg 
                        ring-0
                        focus:outline-none focus:border-sky-500"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
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
                <div className="flex flex-col gap-2 mb-10">
                    <label htmlFor="confirm-password" className="text-xl">
                        Confirmar contraseña
                    </label>
                    <input
                        type="password"
                        placeholder="*****"
                        id="confirm-password"
                        required
                        className="text-lg placeholder:text-[#b1b1b1] placeholder:italic placeholder:font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg 
                        ring-0
                        focus:outline-none focus:border-sky-500"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
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
                    {infoMessage.status && (
                        <div className="mb-3">
                            <InfoAlert
                                title={infoMessage.title}
                                message={infoMessage.message}
                            />
                        </div>
                    )}

                    <button type="submit" className='bg-[#1F4D36] h-14 text-white text-xl rounded-lg mb-12'>
                        Crear cuenta
                    </button>
                </div>

                <p className="text-[#B1B1B1] italic font-medium text-lg text-center">
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" className="text-[#45474B]">
                        Iniciar Sesión
                    </Link>
                </p>
            </form>

            <div className='w-1/2 p-1 hidden lg:block object-contain'>
                <img
                    src={img}
                    alt="Image Sign up"
                    className='bg-center object-cover rounded-r-lg drop-shadow-md'
                />
            </div>
        </div>
    )
}

export default FormSignUp