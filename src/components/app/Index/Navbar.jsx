import React from 'react'
import { Link } from 'react-router-dom'

// IMAGENES E ICONOS
import Home from "../../../assets/icons/Home.svg"
import calendar from "../../../assets/icons/calndar.svg"
import logout from "../../../assets/icons/logout.svg"
import user from "../../../assets/icons/user.svg"
import LogoMedReminder from "../../../assets/icons/logo-pagina.svg"
function Navbar() {
    return (
        <div>
            <navbar className='bg-[#1F4D36] py-4 px-12 flex justify-between items-center'>

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
                    <p className='text-xl'>Username</p>
                    <img  src={user} alt='svg' />
                    <img src={logout} alt='log out' />
                </div>

            </navbar>
        </div>
    )
}

export default Navbar