import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AddMedModal({ showAddMedModal, handleCloseModal }) {
    const [formData, setFormData] = useState({
        name_medicine: '',
        type_medicine: 'pastilla',
        dose_quantity: '',
        start_day: '',
        start_hour: '',
        doses_num: '',
        doses_interval: '',
        comments: '',
    });

    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
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

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem("session_token"); // Obtiene el token nuevamente
            const response = await axios.post(`http://127.0.0.1:5000/api/medicines/${token}`, formData);
            console.log(response.data);
            // Cierra el modal o realiza otras acciones según sea necesario.
            handleCloseModal();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        showAddMedModal && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-opacity-50 bg-black">
                <div className="z-50 bg-white w-[50%] p-4 rounded-lg shadow-md">
                    <form onSubmit={handleFormSubmit}>
                        <h2 className="text-4xl font-semibold mb-4 text-center m-5">Nuevo Medicamento</h2>
                        <div className="mb-4">
                            <label htmlFor="nombreMed">Nuevo Medicamento</label>
                            <input
                                required
                                type="text"
                                id="nombreMed"
                                name="name_medicine"
                                value={formData.name_medicine}
                                onChange={handleFormChange}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tipoMed">Tipo de Medicina</label>
                            <select
                                id="tipoMed"
                                name="type_medicine"
                                value={formData.type_medicine}
                                onChange={handleFormChange}
                                className="border p-2 w-full"
                            >
                                <option value="pastilla">Pastilla</option>
                                <option value="jarabe">Jarabe</option>
                                <option value="inyeccion">Inyección</option>
                                {/* Agrega más opciones según sea necesario */}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dosis">Dosis</label>
                            <input
                                required
                                type="text"
                                id="dosis"
                                name="dose_quantity"
                                value={formData.dose_quantity}
                                onChange={handleFormChange}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className='grid grid-cols-3 gap-5'>
                            <div className="mb-4">
                                <label htmlFor="horaToma">Hora Inicial de Toma</label>
                                <input
                                    required
                                    type="time"
                                    id="horaToma"
                                    name="start_hour"
                                    value={formData.start_hour}
                                    onChange={handleFormChange}
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="numDosis">Número de Dosis</label>
                                <input
                                    required
                                    type="number"
                                    id="numDosis"
                                    name="doses_num"
                                    value={formData.doses_num}
                                    onChange={handleFormChange}
                                    className="border p-2 w-full"
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
                                    onChange={handleFormChange}
                                    className="border p-2 w-full"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="comentario">Comentario</label>
                            <textarea
                                id="comentario"
                                name="comments"
                                value={formData.comments}
                                onChange={handleFormChange}
                                className="border p-2 w-full"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="button" onClick={handleCloseModal} className="mr-2">
                                Cancelar
                            </button>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default AddMedModal;
