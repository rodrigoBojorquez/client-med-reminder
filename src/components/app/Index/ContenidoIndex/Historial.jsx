import React from 'react'

function Historial() {
    return (
        <section className='  bg-white p-3 rounded-lg mx-10 shadow-2xl h-full'>
            <p className=' text-3xl mb-2 text-center text-[#1F4D36]'>Historial</p>

            {/* Historial */}

            <div className='flex flex-col gap-2 overflow-auto'>
                <div className=' w-full bg-[#98c8d8] py-3 px-7 flex justify-between'>
                    <p>Medicina</p>
                    <p>dd/mm/yyyy</p>
                    <p>hh:mm</p>
                </div>
                <div className=' w-full bg-[#FF6969] p-3 px-7 flex justify-between'>
                    <p>Medicina</p>
                    <p>dd/mm/yyyy</p>
                    <p>hh:mm</p>
                </div>
                <div className=' w-full bg-[#98c8d8] p-3 px-7 flex justify-between'>
                    <p>Medicina</p>
                    <p>dd/mm/yyyy</p>
                    <p>hh:mm</p>
                </div>
                <div className=' w-full bg-[#98c8d8] p-3 px-7 flex justify-between'>
                    <p>Medicina</p>
                    <p>dd/mm/yyyy</p>
                    <p>hh:mm</p>
                </div>
            </div>
        </section>
    )
}

export default Historial