import React from 'react'
import HomeIndex from '../components/app/Index/HomeIndex'
import Navbar from '../components/app/Index/Navbar'
function IndexApp({setAutenticado}) {
    return (
        <div>
            <Navbar
                setAutenticado={setAutenticado}
            />
            <div  className='bg-[#F2F4EA]  w-full h-screen '>
            <HomeIndex />
            </div>
        </div>
    )
}

export default IndexApp