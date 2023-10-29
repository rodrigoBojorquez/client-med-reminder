import axios from 'axios'; // Importa la biblioteca axios.
import React, { useEffect, useState } from 'react';
import AddMedModal from '../Medicina/AddMeModal';

function Medicinas() {
    const [medicinas, setMedicinas] = useState([]); // Estado para almacenar los datos de medicinas.

    const [showAddMedModal, setShowAddMedModal] = useState(false);

    const handleAddMedClick = () => {
        setShowAddMedModal(true);
    };

    const handleCloseModal = () => {
        setShowAddMedModal(false);
    };

    // Realiza la solicitud HTTP al servidor Flask para obtener los datos de las medicinas.
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/medicines') // Cambia la URL según tu configuración de rutas en Flask.
            .then(response => {
                setMedicinas(response.data.Data); // Almacena los datos en el estado.
            })
            .catch(error => {
                console.error('Error al obtener datos de medicinas:', error);
            });
    }, []); // El segundo argumento vacío asegura que la solicitud se realice una vez al cargar el componente.

    return (
        <div className='bg-white px-3 py-7 rounded-lg shadow-2xl h-full'>
            <h1 className='text-3xl text-center text-[#1F4D36] mb-7'>Tus Medicinas</h1>

            <div className='flex justify-between px-5 py-2 m-3 border-b-[3px] border-[#1F4D36] '>
                <p className='text-[#45474B] text-xl font-medium'>Nombre</p>
                <p className='text-[#45474B] text-xl font-medium'>Dosis Faltantes</p>
            </div>

            <div className='gridT mx-10'>
                <div className='flex justify-center flex-col items-center gap-3'>
                    {medicinas.length > 0? (<>
                        {medicinas.map(medicina => (
                        <p key={medicina.id_medicine} className='m-1 text-lg font-medium text-[#45474B]'>
                            {medicina.name_medicine}
                        </p>
                    ))}
                    </>):(<>
                    <h2 className=' text-center text-2xl '> No hay Medicamentos añadidos</h2>
                    </>)}
                  
                </div>

                <div className='border-r-[3px] border-[#1F4D36] mr-10 w-auto'></div>

                <div className='flex items-center flex-col justify-center gap-3'>
                    {medicinas.length > 0? (<>
                        {medicinas.map(medicina => (
                        <p key={medicina.id_medicine} className='m-1 text-lg font-medium text-[#45474B]'>
                            {medicina.dose_quantity}
                        </p>
                    ))}</>):(<>
                    <p className='text-center text-2xl'>No hay elementos anadidos</p>
                    </>)}
                
                </div>
            </div>
            
            <div className='flex justify-center mt-5'>
                <button className='py-2 font-medium text-lg tracking-wide bg-[#1F4D36] rounded-xl text-white mr-10 my-4 px-12' onClick={handleAddMedClick}>
                    Añadir más
                </button>
            </div>
            
            <AddMedModal showAddMedModal={showAddMedModal} handleCloseModal={handleCloseModal} />
        </div>
    );
}

export default Medicinas;
