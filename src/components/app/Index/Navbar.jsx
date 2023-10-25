import React from 'react'
import Home from "../../../assets/icons/Home.svg"
import calendar from "../../../assets/icons/calndar.svg"
import logout from "../../../assets/icons/logout.svg"
import user from "../../../assets/icons/user.svg"
function Navbar() {
    return (
        <div>
            <navbar className='bg-[#1F4D36] py-4 flex   justify-center items-center'>
                <div className='flex justify-between '>

                    
                    <div className='flex'>
                        <div className='flex items-center text-white'>
                            <img className='w-12' src={Home} alt='svg' />
                            <p className='text-xl'>Home</p>

                        </div>

                        <div className='flex items-center text-white'>
                            <img className='w-12' src={calendar} alt='svg' />
                            <p className='text-xl'>Calendario</p>
                        </div>
                    </div>



                    <div className='flex items-center gap-3 ml-12 text-white'>
                        <p className='text-xl'>Username</p>
                        <img className='w-12' src={user} alt='svg' />
                        <img className='w-12' src={logout} alt='log out' />
                    </div>
                </div>

            </navbar>
        </div>
    )
}

export default Navbar