import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import BadAlert from "../../../BadAlert";
import InfoAlert from "../../../InfoAlert";

function AddMedModal({ showAddMedModal, handleCloseModal, setEditMedicine }) {

    const [typeMedicines, setTypeMedicines] = useState([])
    const [formData, setFormData] = useState({
        name_medicine: '',
        type_medicine: '',
        dose_quantity: 0,
        start_day: '',
        start_hour: '',
        day_doses: 0,
        doses_interval: 0,
        comments: '',
    });
    const [errorMessage, setErrorMessage] = useState({
        status: false,
        title: "",
        message: "",
    });
    const [infoMessage, setInfoMessage] = useState({
        status: false,
        title: "",
        message: "",
    });

    const handleAddMedicine = e => {
        e.preventDefault()
        if (
            formData.name_medicine !== '' &&
            formData.type_medicine !== '' &&
            formData.dose_quantity !== 0 &&
            formData.start_day !== '' &&
            formData.start_hour !== '' &&
            formData.doses_num !== 0 &&
            formData.doses_interval !== 0
        ) {
            console.log(formData)
            const sessionToken = localStorage.getItem("session_token")
            axios.post(`http://127.0.0.1:5000/medicines/${sessionToken}`, formData)
                .then(res => {
                    setInfoMessage({
                        status: true,
                        title: "Perfecto",
                        message: res.data.Message
                    })

                    setFormData({
                        name_medicine: '',
                        type_medicine: '',
                        dose_quantity: '',
                        start_day: '',
                        start_hour: '',
                        doses_num: 0,
                        doses_interval: 0,
                        comments: '',
                    })
                })
                .catch(err => {
                    console.error(err.response.data.Error)
                    setErrorMessage({
                        status: true,
                        title: "Oops",
                        message: err.response.data.Error
                    })
                })

            setTimeout(() => window.location.reload(), 2000)
        }
        else {
            setErrorMessage({
                status: true,
                title: "Oops",
                message: "Todos los campos son necesarios"
            })
        }

    }

    const getDatAndHour = () => {
        const now = new Date();
        const day = now.toISOString().slice(0, 10);
        const hour = now.toLocaleTimeString();

        setFormData({ ...formData, start_day: day, start_hour: hour })
    }

    const getTypeMedicines = () => {
        axios.get("http://127.0.0.1:5000/medicines/type-medicines")
            .then(res => {
                setTypeMedicines(res.data.Data)
            })
            .catch(err => {
                console.log(err.response.data.Error)
            })
    }

    useEffect(() => {
        getDatAndHour()
        getTypeMedicines()
    }, [])

    // REINICIA EL MENSAJE DE ERROR
    useEffect(() => {
        if (errorMessage.status === true) {
            setTimeout(
                () => setErrorMessage({ status: false, title: "", message: "" }),
                2500
            );
        }
    }, [errorMessage.status]);

    useEffect(() => {
        if (infoMessage.status === true) {
            setTimeout(
                () => setInfoMessage({ status: false, title: "", message: "" }),
                2500
            );
        }
    }, [infoMessage.status]);

  
    return (
        <AnimatePresence>
            {
                showAddMedModal && (
                    
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50               ">
                        <div className="z-50 bg-white w-[60%] py-7 px-10 rounded-lg shadow-md">
                            <form onSubmit={handleAddMedicine}>
                                <h2 className="text-4xl font-semibold mb-4 text-center">Nuevo Medicamento</h2>
                                <div className="mb-4">
                                    <label htmlFor="nombreMed">Nuevo Medicamento</label>
                                    <input
                                        required
                                        type="text"
                                        id="nombreMed"
                                        name="name_medicine"
                                        value={formData.name_medicine}
                                        onChange={e => setFormData({ ...formData, name_medicine: e.target.value })}
                                        className="border p-2 w-full"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="mb-4">
                                        <label htmlFor="dosis">Cantidad de dosis</label>
                                        <input
                                            required
                                            type="number"
                                            id="dosis"
                                            name="dose_quantity"
                                            value={formData.dose_quantity}
                                            onChange={e => setFormData({ ...formData, dose_quantity: parseFloat(e.target.value) })}
                                            className="border p-2 w-full"
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="tipoMed">Tipo de Medicina</label>
                                        <select
                                            id="tipoMed"
                                            name="type_medicine"
                                            className="border p-2 h-1/2 text-center"
                                            value={formData.type_medicine}
                                            onChange={e => setFormData({ ...formData, type_medicine: e.target.value })}
                                        >
                                            <option value="" defaultValue>-- Elige un tipo de medicina --</option>
                                            {typeMedicines.map((medicine, index) => (
                                                <option value={medicine} key={index}>
                                                    {medicine.charAt(0).toUpperCase() + medicine.slice(1)}      {/*vuelve mayuscula la primera letra*/}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className="mb-4">
                                        <label htmlFor="numDosis">¿Cuantos días?</label>
                                        <input
                                            required
                                            type="number"
                                            id="numDosis"
                                            name="doses_num"
                                            value={formData.doses_num}
                                            onChange={e => setFormData({ ...formData, day_doses: parseInt(e.target.value) })}
                                            className="border p-2 w-full"
                                            min={1}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="horas">Cada Cuántas Horas</label>
                                        <input
                                            required
                                            type="number"
                                            id="horas"
                                            name="doses_interval"
                                            value={formData.doses_interval}
                                            onChange={e => setFormData({ ...formData, doses_interval: parseInt(e.target.value) })}
                                            className="border p-2 w-full"
                                            min={1}
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="comentario">Comentarios</label>
                                    <textarea
                                        id="comentario"
                                        name="comments"
                                        value={formData.comments}
                                        onChange={e => setFormData({ ...formData, comments: e.target.value })}
                                        className="border p-2 w-full"
                                        rows="3"
                                    ></textarea>
                                </div>
                                {errorMessage.status && (
                                    <div className="mb-3 text-center">
                                        <BadAlert
                                            title={errorMessage.title}
                                            message={errorMessage.message}
                                        />
                                    </div>
                                )}
                                {infoMessage.status && (
                                    <div className="mb-3 text-center">
                                        <InfoAlert
                                            title={infoMessage.title}
                                            message={infoMessage.message}
                                        />
                                    </div>
                                )}
                                <div className="flex justify-center gap-5">
                                    <button type="button" onClick={handleCloseModal} className="bg-red-400 outline-none rounded-md font-medium text-white px-5 py-2 w-[30%]">
                                        Cancelar
                                    </button>
                                    <button type="submit" className="bg-blue-500 rounded-md font-medium outline-none text-white px-4 py-2 w-[30%]">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>

    );
}

export default AddMedModal;
