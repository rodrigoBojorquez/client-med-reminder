import React from 'react'

// IMAGENES E ICONOS
import CopyrightIcon from "../assets/icons/copyright.svg"
function FormsFooter() {
  return (
    <footer className='bg-[#1F4D36] py-4 flex gap-2 justify-center items-center'>
        <img src={CopyrightIcon} alt="Copyright" />
        <p className='text-white font-extralight'>2023 Med-Reminder, Inc. All rights reserved</p>
    </footer>
  )
}

export default FormsFooter