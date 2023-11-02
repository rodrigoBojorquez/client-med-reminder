import React from 'react'
import FormsFooter from '../components/FormsFooter'
import HomeIndex from '../components/app/Index/HomeIndex'
import Navbar from '../components/app/Index/Navbar'
function IndexApp({setAutenticado}) {
    return (
        <div>
            <Navbar
                setAutenticado={setAutenticado}
            />
            <div  className='bg-[#F2F4EA]   '>
            <HomeIndex />
            </div>
            <FormsFooter    />
        </div>
    )
}

export default IndexApp