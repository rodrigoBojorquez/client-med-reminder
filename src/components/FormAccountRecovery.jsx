import React, { useState } from 'react'

function FormAccountRecovery({img}) {

    const [email, setEmail] = useState("")

    const handleRecuperarCuenta = e => {
        e.preventDefault()

        console.log("Correo enviado")
    }

    return (
        <div className='bg-white flex rounded-lg drop-shadow-lg items-center'>
            <form onSubmit={handleRecuperarCuenta} className='w-full py-10 lg:w-1/2 px-5 md:px-16'>
                <h3 className='block text-4xl text-center lg:text-start font-medium italic mb-24'>Recuperar cuenta</h3>

                <div className='flex flex-col gap-2 mb-24'>
                    <label htmlFor="email" className='text-xl'>Correo</label>
                    <input
                        type="email"
                        placeholder="Escribe tu correo"
                        id="email"
                        required
                        className='text-lg placeholder:text-[#b1b1b1] placeholder:italic placeholder:font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg 
                        ring-0
                        focus:outline-none focus:border-sky-500'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className='bg-[#1F4D36] h-14 text-white text-xl rounded-lg mb-5 block m-auto w-full'>
                    Enviar correo
                </button>
            </form>

            <div className='w-1/2 p-1 hidden lg:block h-full'>
                <img
                    src={img}
                    alt="Image Recuperar cuenta"
                    className='rounded-r-lg drop-shadow-md h-full w-full'
                />
            </div>
        </div>
    )
}

export default FormAccountRecovery