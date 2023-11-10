import { motion } from 'framer-motion'
import React from 'react'
import HomeIndex from '../components/app/Index/HomeIndex'
import Navbar from '../components/app/Index/Navbar'
function IndexApp({ setAutenticado }) {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 1 }}
        >
            <Navbar
                setAutenticado={setAutenticado}
            />
            <div

                className='bg-[#F2F4EA] w-full'>
                <HomeIndex />
            </div>
        </motion.div>
    )
}

export default IndexApp