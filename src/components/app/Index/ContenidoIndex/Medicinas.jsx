import React from 'react';

function Medicinas() {
    const medicinas = [
        { Nombre: "Medicina General", dosisFaltantes: "1" },
        { Nombre: "Medicina Dental", dosisFaltantes: "2" },
        { Nombre: "Medicina General", dosisFaltantes: "xx" },
        { Nombre: "Medicina Dental", dosisFaltantes: "xx" },
        { Nombre: "Medicina General", dosisFaltantes: "xx" },
        { Nombre: "Medicina Dental", dosisFaltantes: "xx" },
        { Nombre: "Medicina General", dosisFaltantes: "xx" },
    ];

    return (
        <div className='  bg-white px-3 py-7 rounded-lg shadow-2xl h-full'>
            <h1 className=' text-3xl text-center text-[#1F4D36] mb-7'>Tus Medicinas</h1>

            <div className='flex justify-between px-5 py-2 m-3 border-b-[3px] border-[#1F4D36] '>
                <p className=' text-[#45474B] text-xl font-medium'>Nombre</p>
                <p className=' text-[#45474B] text-xl font-medium'>Dosis Faltantes</p>
            </div>

            <div className='gridT mx-10'>

                <div className=' flex justify-center flex-col items-center gap-3'>
                    {medicinas.map(medicinasItem => {
                        return (
                            <>
                                <p className='m-1 text-lg font-medium text-[#45474B]'>{medicinasItem.Nombre}</p>
                            </>
                        )
                    })}
                </div>

                <div className=' border-r-[3px] border-[#1F4D36] mr-10 w-auto '></div>

                <div className=' flex items-center flex-col justify-center gap-3'>
                    {medicinas.map(medicinasItem => {
                        return (
                            <>
                                <p className='m-1 text-lg font-medium text-[#45474B]'>{medicinasItem.dosisFaltantes}</p>
                            </>
                        )
                    })}
                </div>


            </div>
            <div className='flex justify-center mt-5'>
                <button className='py-2 font-medium text-lg tracking-wide bg-[#1F4D36] rounded-xl text-white mr-10 my-4 px-12 '>
                    Añadir más
                </button>
            </div>

        </div>

    )
}

export default Medicinas
