import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddMedModal from '../Medicina/AddMeModal';
import MedicationDetailEdit from '../Medicina/MedicationDetailEdit';
import EditMeModal from "../Medicina/EditMeModal"

function Medicinas({medicinasPendientes}) {
    const [medicinas, setMedicinas] = useState([]);
    const [showAddMedModal, setShowAddMedModal] = useState(false);
    const [aggregatedMedicines, setAggregatedMedicines] = useState([])
    const [showEditMeModal, setShowEditMeModal] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [selectedMedicine, setSelectedMedicine] = useState({})

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

    const handleViewDetails = medicice => {
        setSelectedMedicine(medicice)
        setShowDetails(true)
    }

    const aggregateMedicinas = (medicinas) => {
        const dosisFaltantes = []
    
        medicinas.forEach((medicina) => {
            const buscarGrupo = dosisFaltantes.findIndex((inDosisFaltantes) =>
                inDosisFaltantes.medicine_group === medicina.medicine_group
            )
    
            if (buscarGrupo === -1) {
                dosisFaltantes.push({
                    name_medicine: medicina.name_medicine,
                    medicine_group: medicina.medicine_group,
                    dose_quantity: medicina.dose_quantity,
                    type_medicine: medicina.type_medicine,
                    comments: medicina.comments,
                    quantity: 1
                })
            } else {
                dosisFaltantes[buscarGrupo].quantity += 1
            }
        })
    
        setAggregatedMedicines(dosisFaltantes)
    }      
    useEffect(() => {
        loadMedicinesUser();
    }, []);

    useEffect(() => {
        aggregateMedicinas(medicinasPendientes)
    }, [medicinasPendientes])

    return (
        <div className='bg-white px-3 py-7 rounded-lg shadow-2xl h-full'>
            <h1 className='text-3xl text-center text-[#1F4D36] mb-7'>Tus Medicinas</h1>

            <div className='flex justify-between px-5 py-2 m-3 border-b-[3px] border-[#1F4D36] '>
                <p className='text-[#45474B] text-xl font-medium'>Nombre</p>
                <p className='text-[#45474B] text-xl font-medium'>Dosis Faltantes</p>
            </div>

            <div className='mx-14 flex flex-col h-[65%] items-center gap-3'>
                {aggregatedMedicines.length > 0 ? (
                    <>
                        {aggregatedMedicines.map((medicina, index) => (
                            <div key={index} className='w-full hover:cursor-pointer' onClick={() => handleViewDetails(medicina)}>
                                <div className='flex justify-between w-full mb-2'>
                                    <p className='m-1 text-lg text-center font-medium text-[#45474B]'>
                                        {medicina.name_medicine}
                                    </p>
                                    <p className='m-1 text-lg font-medium text-[#45474B]'>
                                        {medicina.quantity}
                                    </p>
                                </div>
                                <hr className='border-[1px] border-[#45474B] w-full' />
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <h2 className=' text-center text-lg p-5'> No hay Medicamentos añadidos</h2>
                    </>
                )}
            </div>

            <div className='flex justify-center mt-5'>
                <button className='py-2 font-medium text-lg tracking-wide bg-[#1F4D36] rounded-xl text-white mr-10 my-4 px-12' onClick={handleAddMedClick}>
                    Añadir más
                </button>
            </div>

            {showDetails && (
                <MedicationDetailEdit
                    setViewDetails={setShowDetails}
                    setEditMedicine={setShowEditMeModal}
                    selectedMedicine={selectedMedicine}
                />
            )}
            {showEditMeModal && (
                <EditMeModal 
                    setViewDetails={setShowDetails}
                    setEditMedicine={setShowEditMeModal}
                    selectedMedicine={selectedMedicine}
                />
            )}

            <AddMedModal showAddMedModal={showAddMedModal} handleCloseModal={handleCloseModal} />
        </div>
    );
}

export default Medicinas;
