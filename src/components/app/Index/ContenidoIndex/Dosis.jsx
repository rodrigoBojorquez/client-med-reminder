import React from 'react'

function Dosis() {
    return (
        <article className='  bg-white p-3 rounded-lg mx-10 shadow-2xl flex flex-col h-full'>
            <h3 className=' text-3xl  text-[#1F4D36] text-center mb-3'>Proximas Dosis</h3>
            
            {/* Proximas dosis */}
            <div className='flex flex-col gap-2'>
                <div className=' w-full bg-[#98D8AA] py-3 px-7 flex justify-between'>
                    <p>Medicina</p>
                    <p>dd/mm/yyyy</p>
                    <p>hh:mm</p>
                </div>
                <div className=' w-full bg-[#98D8AA] py-3 px-7 flex justify-between'>
                    <p>Medicina</p>
                    <p>dd/mm/yyyy</p>
                    <p>hh:mm</p>
                </div>
                <div className=' w-full bg-[#98D8AA] py-3 px-7 flex justify-between'>
                    <p>Medicina</p>
                    <p>dd/mm/yyyy</p>
                    <p>hh:mm</p>
                </div>
            </div>
        </article>
    )
}

export default Dosis