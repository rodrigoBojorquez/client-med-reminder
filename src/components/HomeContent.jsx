import React from 'react'
import { Link } from 'react-router-dom'
import FormsFooter from './FormsFooter'

// IMAGENES E ICONOS
import LogoMedReminder from "../assets/icons/med-reminder.svg"
import HomeImage from "../assets/images/home-image.png"

function HomeContent() {
    return (
        <div className='bg-[#F2F4EA] '>
            <header className='max-sm:flex-col flex items-center justify-between  max-sm:gap-4 px-12 pt-6 pb-5'>
                <div className='flex items-end gap-4'>
                    <img src={LogoMedReminder} alt="Logo" />
                    <p className='text-[#1F4D36] text-3xl font-serif'>Med-Reminder</p>
                </div>
                <p className='text-[#1F4D36] font-serif text-lg tracking-wide text-center'>Porque tu salud es lo más importante para nosotros</p>
                <div className='flex gap-4 items-center'>
                    <Link to={"/sign-up"}>
                        <button className='px-5 py-2 rounded-full border-2 border-[#1F4D36] text-[#1F4D36] text-lg font-medium'>
                            Crea tu cuenta
                        </button>
                    </Link>
                    <Link to={"/login"}>
                        <button className='px-5 py-2 rounded-full border-2 border-[#1F4D36] text-[#1F4D36] text-lg font-medium'>
                            Inicia Sesión
                        </button>
                    </Link>
                </div>
            </header>
            <hr className='border border-[#1F4D36] w-[95%] m-auto mb-10' />

            <main className='px-10 '>
                <article className='grid md:grid-cols-2'>


                    <div className='grid place-content-center'>
                        <h2 className='text-[#1F4D36]  text-4xl sm:text-7xl  sm:tracking-normal sm:leading-[1.25]'>Cuida de tu bienestar con facilidad</h2>
                        <p className='tracking-wider'>Con Med-Reminder, te brindamos una plataforma fácil de usar y altamente personalizable que se adapta a tus necesidades individuales. Ya sea que necesites llevar un registro de tus propios medicamentos o administrar la toma de medicamentos de un ser querido, nuestra aplicación te facilitará la vida.</p>
                        <Link to={"/login"}>
                            <button className='px-5 py-2 rounded-2xl border-2 bg-[#1F4D36] text-white text-lg font-extralight w-full mt-3    sm:w-1/3 mb-10'>
                                Inicia Sesion
                            </button>
                        </Link>
                    </div>

                    <img
                        src={HomeImage}
                        alt="Large home image"
                    />



                </article>


            </main>

            <FormsFooter />
        </div>
    )
}

export default HomeContent