import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Historial() {
    const [history, setHistory] = useState([]);

    const getHistory = () => {
        const sessionToken = localStorage.getItem("session_token")
        axios.get(`http://127.0.0.1:5000/medicines/taken/${sessionToken}`)
            .then(res => {
                setHistory(res.data.Medicines)
            })
            .catch(err => {
                console.error(err)
            })
    }


    useEffect(() => {
        getHistory()
    }, []);

    return (
        <section className='bg-white px-3 py-5 rounded-lg mx-10 shadow-2xl h-full'>
            <p className='text-3xl mb-2 text-center text-[#1F4D36]'>Historial</p>
                { history.length === 0 ?
                (
                <p className='text-center text-lg mt-10'>Aun no ha tomado ningún medicamento</p>
                ) : (
                <ul className='flex flex-col gap-2 overflow-auto'>
                    {history.map(medicine => (
                        <li key={medicine.id_medicine} className={ medicine.status === "a tiempo" ? 'bg-[#A6D0DD]' : "bg-[#FF6969]"}>
                            <div className='flex justify-between py-2 px-7'>
                                <p className='font-normal'>{medicine.name_medicine}</p>
                                <p className='font-normal'>{medicine.dose_hour}</p>
                                <p className='font-normal'>{medicine.dose_day}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                )
                }
        </section>
    );
}

export default Historial;
