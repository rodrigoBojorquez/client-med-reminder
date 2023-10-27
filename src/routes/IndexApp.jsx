import React from 'react'
import HomeIndex from '../components/app/Index/HomeIndex'
import Navbar from '../components/app/Index/Navbar'
function IndexApp({setAutenticado}) {
    return (
        <div>
            <Navbar
                setAutenticado={setAutenticado}
            />
            <HomeIndex />
        </div>
    )
}

export default IndexApp