import React from 'react';

function Medicinas() {
    const medicinas = [
        { Nombre: "Medicina General", dosisFaltantes: "xx" },
        { Nombre: "Medicina Dental", dosisFaltantes: "xx" },
        { Nombre: "Medicina General", dosisFaltantes: "xx" },
        { Nombre: "Medicina Dental", dosisFaltantes: "xx" },
        { Nombre: "Medicina General", dosisFaltantes: "xx" },
        { Nombre: "Medicina Dental", dosisFaltantes: "xx" },
        { Nombre: "Medicina General", dosisFaltantes: "xx" },
    ];

    return (
        <div className='  bg-white p-3 rounded-lg shadow-2xl'>
            <h1 className=' text-2xl text-center text-[#1F4D36]  '> Tus Medicinas </h1>
            <div className='flex justify-evenly m-3 border-b-2 border-[#1F4D36] '>
                <p className=' text-[#1F4D36] text-xl'>Nombre</p>
                <p className=' text-[#1F4D36] text-xl'>Dias Faltantes</p>
            </div>

            <div className='gridT mx°-10'>

                <div className=' flex justify-center flex-col  items-center '>
                    {medicinas.map(medicinasItem => {
                        return (
                            <>
                                <p className='m-1'>{medicinasItem.Nombre}</p>
                            </>
                        )
                    })}
                </div>

                <div className=' border-r-2 border-[#1F4D36]    mr-20  w-auto '></div>

                <div className=' flex items-center flex-col justify-center'>
                    {medicinas.map(medicinasItem => {
                        return (
                            <>
                                <p className='m-1'>{medicinasItem.dosisFaltantes}</p>
                            </>
                        )
                    })}
                </div>


            </div>
            <div className='flex justify-center'>
                <button className='p-3 bg-[#1F4D36] rounded-xl  text-white mr-10 my-4 '>
                    Añadir más
                </button>
            </div>

        </div>

    )
}

export default Medicinas
