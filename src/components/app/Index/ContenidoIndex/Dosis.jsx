import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dosis() {
    const [medicinasPendientes, setMedicinasPendientes] = useState([]);
    const [selectedMedicine, setSelectedMedicine] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("session_token");
        if (token !== null) {
            axios.get(`http://127.0.0.1:5000/medicines/pending/${token}`)
                .then(res => {
                    if (res.data.Message === "Medicamentos pendientes") {
                        setMedicinasPendientes(res.data.Data);
                    } else {
                        console.log("No se encontraron medicamentos pendientes");
                    }
                })
                .catch(err => {
                    console.error("Ha ocurrido un error", err);
                });
        }
    }, []);

    // Función para ordenar las medicinas por la hora más cercana
    const sortMedicinesByTime = medicinas => {
        return medicinas.sort((a, b) => {
            // Parse the time strings into Date objects for comparison
            const timeA = new Date(`${a.dose_hour}`);
            const timeB = new Date(`${b.dose_hour}`);
            return timeA - timeB;
        });
    };

    // Obtener nombres únicos de medicinas para el filtro
    const uniqueMedicineNames = Array.from(new Set(medicinasPendientes.map(medicina => medicina.name_medicine)));

    // Función para filtrar medicamentos
    const filteredMedicines = selectedMedicine
        ? medicinasPendientes.filter(medicina => medicina.name_medicine === selectedMedicine)
        : medicinasPendientes;

    // Ordena las medicinas por hora más cercana
    const sortedMedicines = sortMedicinesByTime(filteredMedicines);

    return (
        <article className='bg-white p-3 rounded-lg mx-10 shadow-2xl flex flex-col h-60'>
            <h3 className='text-3xl text-[#1F4D36] text-center mb-3'>Próximas Dosis</h3>
            <select
                value={selectedMedicine}
                onChange={(e) => setSelectedMedicine(e.target.value)}
            >
                <option value="">Todas las medicinas</option>
                {uniqueMedicineNames.map((medicine, index) => (
                    <option key={index} value={medicine}>
                        {medicine}
                    </option>
                ))}
            </select>
            <div className='flex flex-col gap-4 overflow-auto m-1'>
                {sortedMedicines.length > 0 ? (
                    <>
                        {sortedMedicines.map((medicina, index) => (
                            <div key={index} className='bg-[#98D8AA]'>
                                <div className='w-full py-2 px-7 flex justify-between'>
                                    <p>{medicina.name_medicine}</p>
                                    <p>{medicina.dose_day}</p>
                                    <p>{medicina.dose_hour}</p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className='text-center font-semibold text-2xl text-[#397b5a]'>
                        <h2> No tienes dosis pendientes </h2>
                    </div>
                )}
            </div>
        </article>
    );
}

export default Dosis;
