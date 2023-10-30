import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dosis() {
    const [medicinasPendientes, setMedicinasPendientes] = useState([]);

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

    return (
        <article className='  bg-white p-3 rounded-lg mx-10 shadow-2xl flex flex-col h-full o'>
            <h3 className=' text-3xl  text-[#1F4D36] text-center mb-3'>Próximas Dosis</h3>
            <div className='flex flex-col gap-2 overflow-auto'>
                {medicinasPendientes.length > 0 ?
                    (<>
                        {medicinasPendientes.map((medicina, index) => (
                            <div key={index} className='w-full bg-[#98D8AA] py-3 px-7 flex justify-between'>
                                <p>{medicina.name_medicine}</p>
                                <p>{medicina.dose_day}</p>
                                <p>{medicina.dose_hour}</p>
                            </div>
                        ))}
                    </>)
                    :
                    (<div className=' text-center font-semibold text-2xl  text-[#397b5a] '>
                        <h2> No tienes dosis pendientes </h2>
                    </div>)}


            </div>
        </article>
    );
}

export default Dosis;
