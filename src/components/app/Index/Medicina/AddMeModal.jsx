import React from 'react';

function AddMedModal({ showAddMedModal, handleCloseModal }) {
    return (
        showAddMedModal && (
            <div className="fixed  top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-opacity-50 bg-black">
                <div className=" z-50 bg-white w-[50%]    p-4 rounded-lg shadow-md">
                    <form>
                        <h2 className="text-4xl font-semibold mb-4 text-center m-5">Nuevo Medicamento</h2>
                        <div className="mb-4">
                            <label htmlFor="nombreMed">Nuevo Medicamento</label>
                            <input required type="text" id="nombreMed" className="border p-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tipoMed">Tipo de Medicina</label>
                            <select id="tipoMed" className="border p-2 w-full">
                                <option value="pastilla">Pastilla</option>
                                <option value="jarabe">Jarabe</option>
                                <option value="inyeccion">Inyección</option>
                                {/* Agrega más opciones según sea necesario */}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dosis">Dosis</label>
                            <input required type="text" id="dosis" className="border p-2 w-full" />
                        </div>

                        <div className='grid grid-cols-3 gap-5'>
                            <div className="mb-4">
                                <label htmlFor="horaToma">Hora Inicial de Toma</label>
                                <input required type="time" id="horaToma" className="border p-2 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="numDosis">Número de Dosis</label>
                                <input required type="number" id="numDosis" className="border p-2 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="horas">Cada Cuántas Horas</label>
                                <input required type="number" id="horas" className="border p-2 w-full" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="comentario">Comentario</label>
                            <textarea id="comentario" className="border p-2 w-full" rows="3"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="button" onClick={handleCloseModal} className="mr-2">Cancelar</button>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default AddMedModal;