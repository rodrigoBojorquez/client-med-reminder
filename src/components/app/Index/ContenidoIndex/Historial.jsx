import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Historial() {
    const { session_token } = useParams();
    const [historial, setHistorial] = useState([]);
    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        // Verifica si el usuario está autenticado antes de realizar la solicitud
        const token = localStorage.getItem("session_token");
        if (token !== null) {
            axios.get(`http://127.0.0.1:5000/users/${token}`)
                .then(res => {
                    if (res.data.Status === true) {
                        setAutenticado(true);
                        console.log(token);
                    } else {
                        setAutenticado(false);
                    }
                })
                .catch(err => {
                    console.error("Ha ocurrido un error", err);
                });
        }
    }, []);

    useEffect(() => {
        // Asegúrate de que el usuario esté autenticado antes de realizar la solicitud
        if (autenticado) {
            // Realiza una solicitud GET al backend para obtener el historial
            axios.get(`http://127.0.0.1:5000/medicines/taken/${session_token}`)
                .then(res => {
                    if (res.data && res.data.Medicines) {
                        setHistorial(res.data.Medicines);
                    }
                })
                .catch(err => {
                    console.error("Ha ocurrido un error al cargar el historial", err);
                });
        }
    }, [autenticado, session_token]);

    return (
        <section className='bg-white p-3 rounded-lg mx-10 shadow-2xl h-full'>
            <p className='text-3xl mb-2 text-center text-[#1F4D36]'>Historial</p>

            <div className='flex flex-col gap-2 overflow-auto'>
                {historial.length > 0? 
                (<>
                  {historial.map((entry, index) => (
                    <div key={index} className={`w-full bg-[#${index % 2 ? '98c8d8' : 'FF6969'}] py-3 px-7 flex justify-between`}>
                        <p>{entry.name_medicine}</p>
                        <p>{entry.dose_day}</p>
                        <p>{entry.dose_hour}</p>
                    </div>
                ))}
                </>)
                :
                (<div className=' text-2xl font-semibold text-[#397b5a] text-center'>
                <h2> No hay medicamentos en el Historial </h2> 
                </div>)}
              
            </div>
        </section>
    )
}

export default Historial;
