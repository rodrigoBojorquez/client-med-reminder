import React from 'react'
import { Link } from 'react-router-dom'

// IMAGENES E ICONOS
import Home from "../../../assets/icons/Home.svg"
import calendar from "../../../assets/icons/calndar.svg"
import LogoMedReminder from "../../../assets/icons/logo-pagina.svg"
import logout from "../../../assets/icons/logout.svg"
import user from "../../../assets/icons/user.svg"
function Navbar({setAutenticado}) {

    const handleLogOut = () => {
        setAutenticado(false)
        localStorage.clear()
    }

    return (
        <div>
            <nav className='bg-[#1F4D36] py-4 px-12 flex max-sm:flex-col max-sm:gap-5 justify-between items-center'>

                <div className='flex items-center gap-3'>
                    <img src={LogoMedReminder} alt="Logo" />
                    <p className='text-white text-2xl font-serif'>Med-Reminder</p>
                </div>


                <div className='flex gap-16'>
                    <Link to="/index" className='flex items-center text-white gap-2'>
                        <img src={Home} alt='svg' />
                        <p className='text-xl'>Home</p>
                    </Link>


                    <Link to={"/calendar"} className='flex items-center text-white gap-2'>
                        <img src={calendar} alt='svg' />
                        <p className='text-xl'>Calendario</p>
                    </Link>
                </div>



                <div className='flex items-center gap-3 ml-12 text-white'>
                    <p className='text-xl'>{localStorage.getItem("username")}</p>
                    <Link to={"/edit-profile"}>
                        <img  src={user} alt='svg' />
                    </Link>
                    <button onClick={handleLogOut}>
                        <img src={logout} alt='log out' />
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar