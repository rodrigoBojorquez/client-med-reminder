import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BadAlert from '../../../BadAlert';
import InfoAlert from '../../../InfoAlert';

function EditMeModal({ setEditMedicine, selectedMedicine, setMedicines, date, setViewDetails }) {

    const [typeMedicines, setTypeMedicines] = useState([])
    const [formData, setFormData] = useState({
        name_medicine: selectedMedicine.name_medicine,
        type_medicine: selectedMedicine.type_medicine,
        dose_quantity: selectedMedicine.dose_quantity,
        start_day: selectedMedicine.start_day,
        start_hour: selectedMedicine.start_hour,
        day_doses: 0,
        doses_interval: 0,
        comments: selectedMedicine.comments,
        medicine_group: selectedMedicine.medicine_group
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

    const handleEditMedicine = e => {
        e.preventDefault()
        const sessionToken = localStorage.getItem("session_token")
        const group = formData.medicine_group
        axios.put(`http://127.0.0.1:5000/medicines/${sessionToken}/${group}`, formData)
            .then(res => {
                setInfoMessage({
                    status: true,
                    title: "Perfecto",
                    message: res.data.Message
                })
                setViewDetails(false)
                setTimeout(() => setEditMedicine(false), 2000)
                console.log(res)
                window.location.reload()
            })
            .catch(err => {
                console.error(err.response.data.Error)
                setErrorMessage({
                    status: true,
                    title: "Oops",
                    message: err.response.data.Error
                })
            })
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

    const getDatAndHour = () => {
        const now = new Date();
        const day = now.toISOString().slice(0, 10);
        const hour = now.toLocaleTimeString();

        setFormData({ ...formData, start_day: day, start_hour: hour })
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
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-opacity-50 bg-black">
                <div className="z-50 bg-white w-[60%] py-7 px-10 rounded-lg shadow-md">
                    <form onSubmit={handleEditMedicine}>
                        <h2 className="text-4xl font-semibold mb-4 text-center">Editar medicina</h2>
                        <div className="mb-4">
                            <label htmlFor="nombreMed">Nombre del medicamento</label>
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
                                    value={formData.day_doses}
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
                            <button type="button" onClick={() => setEditMedicine(false)} className="bg-red-400 outline-none rounded-md font-medium text-white px-5 py-2 w-[30%]">
                                Cancelar
                            </button>
                            <button type="submit" className="bg-blue-500 rounded-md font-medium outline-none text-white px-4 py-2 w-[30%]">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </AnimatePresence>

    )
}

export default EditMeModal