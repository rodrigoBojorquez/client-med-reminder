import React from 'react'

function FormResetPassword({ img }) {

    const handleReestablecerContra = e => {
        e.preventDefault()
        console.log("Reestableciendo contraseña");
    }

    return (
        <div className='bg-white flex rounded-lg drop-shadow-lg items-center h-[800px]'>
            <form onSubmit={handleReestablecerContra} className='w-full py-10 lg:w-1/2 px-5 md:px-16'>
                <h3 className='block text-4xl text-center lg:text-start font-medium italic mb-24'>Restablecer contraseña</h3>

                <div className='flex flex-col gap-2 mb-12'>
                    <label htmlFor="password" className='text-xl'>Nueva contraseña</label>
                    <input
                        type="password"
                        placeholder="*****"
                        id="password"
                        required
                        className='text-lg placeholder:text-[#b1b1b1] placeholder:italic placeholder:font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg 
ring-0
focus:outline-none focus:border-sky-500'
                    />
                </div>

                <div className='flex flex-col gap-2 mb-24'>
                    <label htmlFor="confirm-password" className='text-xl'>Confirmar contraseña</label>
                    <input
                        type="password"
                        placeholder="*****"
                        id="confirm-password"
                        required
                        className='text-lg placeholder:text-[#b1b1b1] placeholder:italic placeholder:font-light border-[1.5px] border-[#b1b1b1] px-3 py-2 rounded-lg 
ring-0
focus:outline-none focus:border-sky-500'
                    />
                </div>

                <button type="submit" className='bg-[#1F4D36] h-14 text-white text-xl rounded-lg mb-5 block m-auto w-full'>
                    Restablecer contraseña
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

export default FormResetPassword