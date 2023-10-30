import React, { useEffect, useState } from 'react';

function Historial() {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        // Realizar la solicitud a la API Flask para obtener el historial de medicamentos
        fetch('/medicines/taken/session_token_here') // Reemplaza 'session_token_here' con el token de sesión correcto
            .then(response => response.json())
            .then(data => {
                if (data.Medicines) {
                    setMedicines(data.Medicines);
                }
            })
            .catch(error => {
                console.error('Error al obtener el historial de medicamentos', error);
            });
    }, []);

    return (
        <section className='bg-white p-3 rounded-lg mx-10 shadow-2xl h-full'>
            <p className='text-3xl mb-2 text-center text-[#1F4D36]'>Historial</p>

            <div className='flex flex-col gap-2 overflow-auto'>
                <p>Historial de medicamentos:</p>
                <ul>
                    {medicines.map(medicine => (
                        <li key={medicine.id_medicine}>
                            <strong>Nombre:</strong> {medicine.name_medicine}<br />
                            <strong>Tipo:</strong> {medicine.type_medicine}<br />
                            <strong>Hora de la dosis:</strong> {medicine.dose_hour}<br />
                            <strong>Fecha de la dosis:</strong> {medicine.dose_day}<br />
                            <strong>Cantidad:</strong> {medicine.dose_quantity}<br />
                            <strong>Comentarios:</strong> {medicine.comments}<br />
                            <strong>Estado:</strong> {medicine.status}<br /><br />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Historial;
