import { motion } from 'framer-motion'
import React from 'react'
import TablaMed from '../components/app/Index/Medicina/TablaMed'
function Calendario() {
  return (
    <div>
        <motion.div
        
        initial={{ opacity: 0, }}
        animate={{ opacity: 1,  }}
        transition={{ duration: 1 }}
        >
            <TablaMed/>
        </motion.div>
    </div>
  )
}

export default Calendario