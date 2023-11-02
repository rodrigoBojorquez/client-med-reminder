import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddMedModal from '../Medicina/AddMeModal';

function Medicinas() {
    const [medicinas, setMedicinas] = useState([]);
    const [showAddMedModal, setShowAddMedModal] = useState(false);

    const handleAddMedClick = () => {
        setShowAddMedModal(true);
    };

    const handleCloseModal = () => {
        setShowAddMedModal(false);
    };

    const loadMedicinesUser = () => {
        axios.get('http://127.0.0.1:5000/medicines')
            .then(response => {
                setMedicinas(response.data.Data);
            })
            .catch(error => {
                console.error('Error al obtener datos de medicinas:', error);
            });
    }

  

    const deleteMedicina = (group) => {
        const token = localStorage.getItem("session_token")
        if (token !== null) {
            axios.get(`http://127.0.0.1:5000/users/${token}`)
            console.log(token)
        }
        axios.delete(`http://127.0.0.1:5000/medicines/${token}/${group}`)
            .then(response => {
                if (response.status === 200) {
                    alert('se a eliminado correctamente la medicina')
                    loadMedicinesUser();
                } else {
                    console.error('Error al eliminar medicina:', response.data);
                }
            })
            .catch(error => {
                console.error('Error al eliminar medicina:', error);
            });
    }

    useEffect(() => {
        loadMedicinesUser();
    }, []);

    const aggregateMedicinas = (medicinas) => {
        const aggregated = {};
        medicinas.forEach((medicina) => {
            if (aggregated[medicina.name_medicine]) {
                // Si ya tenemos un medicamento con el mismo nombre, suma la cantidad como número.
                aggregated[medicina.name_medicine].dose_quantity += parseFloat(medicina.dose_quantity);
            } else {
                // Si es un medicamento nuevo, agrégalo al objeto de resultados.
                aggregated[medicina.name_medicine] = { ...medicina };
                // Asegúrate de que la dosis sea un número.
                aggregated[medicina.name_medicine].dose_quantity = parseFloat(medicina.dose_quantity);
            }
        })

        return Object.values(aggregated);
    };

    const aggregatedMedicinas = aggregateMedicinas(medicinas);

    return (
        <div className='bg-white sm:px-3 py-7 rounded-lg shadow-2xl h-full'>
            <h1 className='text-3xl text-center text-[#1F4D36] mb-7'>Tus Medicinas</h1>

            <div className='flex justify-between px-5 py-2 m-3 border-b-[3px] border-[#1F4D36] '>
                <p className='text-[#45474B] text-xl font-medium'>Nombre</p>
                <p className='text-[#45474B] text-xl font-medium'>Dosis Faltantes</p>
            </div>

            <div className='gridT mx-10'>
                <div className='flex justify-center flex-col items-center gap-3'>
                    {aggregatedMedicinas.length > 0 ? (
                        <>
                            {aggregatedMedicinas.map(medicina => (
                                <p key={medicina.id_medicine} className='m-1 text-lg text-center font-medium text-[#45474B]'>
                                    {medicina.name_medicine}
                                </p>
                            ))}
                        </>
                    ) : (
                        <>
                            <h2 className=' text-center text-2xl '> No hay Medicamentos añadidos</h2>
                        </>
                    )}
                </div>

                <div className='border-r-[3px] border-[#1F4D36] ml-5 w-auto'></div>

                <div className='flex items-center flex-col justify-center gap-3'>
                    {aggregatedMedicinas.length > 0 ? (
                        <>
                            {aggregatedMedicinas.map(medicina => (
                                <div className='grid grid-cols-2' key={medicina.id_medicine}>
                                    <p className='m-1 text-lg font-medium text-[#45474B]'>
                                        {medicina.dose_quantity}
                                    </p>
                                    <button
                                        className='p-2 bg-red-600 rounded-lg text-white'
                                        onClick={() => deleteMedicina(medicina.medicine_group,)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p className='text-center text-2xl'>No hay elementos añadidos</p>
                    )}

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
