import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import AddMedModal from './AddMeModal';
import Manana from './Manana';
import Noche from './Noche';
import SoloCuandoNececito from './SoloCuandoNececito';
import Tarde from './Tarde';
import axios from 'axios';

function TablaMed() {
    const [showAddMedModal, setShowAddMedModal] = useState(false);
    const [date, setDate] = useState("")
    const [medicines, setMedicines] = useState([])
    const [morning, setMorning] = useState([])
    const [afternoon,setAfternoon] = useState([])
    const [evening, setEvening] = useState([])
    const [editMedicine, setEditMedicine] = useState(false  )

    const getMedicinesDay = async () => {
        try {
            const sessionToken = localStorage.getItem("session_token");         
            const response = await axios.get(`http://127.0.0.1:5000/medicines/${sessionToken}/calendar/${date}`) 
            setMedicines(response.data.Data)
        }
        catch (err) {
            // console.error(err)
        }
    };
      
    const sortHours = () => {
        const morning = medicines.filter(medicina => {
            const doseTime = new Date(`${date} ${medicina.dose_hour}`)
            if (doseTime >= new Date(`${date} 06:00:00`) && doseTime <= new Date(`${date} 11:59:59`)) {
                return true
            }
        })
        const afternoon = medicines.filter(medicina => {
            const doseTime = new Date(`${date} ${medicina.dose_hour}`)
            if (doseTime >= new Date(`${date} 12:00:00`) && doseTime <= new Date(`${date} 18:59:59`)) {
                return true
            }
        })  
        const evening = medicines.filter(medicina => {
            const doseTime = new Date(`${date} ${medicina.dose_hour}`)
            if (doseTime >= new Date(`${date} 19:00:00`) || doseTime <= new Date(`${date} 05:59:59`)) {
                return true
            }
        })  
        
        setMorning(morning)
        setAfternoon(afternoon)
        setEvening(evening)
    }

    const handleAddMedClick = () => {
        setShowAddMedModal(true);
    };

    const handleCloseModal = () => {
        setShowAddMedModal(false);
    };

    const getDay = () => {
        const now = new Date();
        const day = now.toISOString().slice(0, 10);
        setDate(day)
    }

    const subtractDay = () => {
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() - 1);
        const newDate = currentDate.toISOString().slice(0, 10);
        setDate(newDate);
    }

    const addDay = () => {
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + 1);
        const newDate = currentDate.toISOString().slice(0, 10);
        setDate(newDate);
    }

    useEffect(() => {
        getDay()
    }, [])

    useEffect(() => {
        getMedicinesDay()
    }, [date])

    useEffect(() => {
        sortHours()
    }, [medicines])

    return (
        <div>
            <Navbar />
            <div className='bg-[#F2F4EA] h-screen flex justify-center p-10'>
                <div className='bg-white m-2 px-7 py-7 w-[90%] lg:w-[70%]'>
                        <h3 className='text-4xl text-[#1F4D36] text-center mb-5'>
                            <button onClick={subtractDay} className='font-bold mr-4'>{"<<"}</button> {date} <button onClick={addDay} className='font-bold ml-4'>{">>"}</button>
                        </h3>
                    <section className='grid grid-cols-3 gap-5 w-full'>
                        <div>
                            <Manana 
                                morning={morning}
                            />
                        </div>

                        <div>
                            <Tarde 
                                afternoon={afternoon}    
                            />
                        </div>
                        <div>
                            <Noche 
                                evening={evening}         
                            />
                        </div>
                        {/* <div>
                            <SoloCuandoNececito />
                        </div> */}
                    </section>
                    <div className='flex justify-center mt-7'>
                            <button onClick={handleAddMedClick} className=' text-white bg-blue-500 p-2 rounded-xl '>Agregar Medicamento</button>
                    </div>
                </div>
            </div>
            <AddMedModal showAddMedModal={showAddMedModal} handleCloseModal={handleCloseModal} />
        </div>
    );
}

export default TablaMed;
