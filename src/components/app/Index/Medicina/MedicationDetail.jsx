import React from 'react';

function MedicationDetail({ isOpen, medication, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 grid place-content-center z-50 bg-opacity-50 bg-black">
      <div className="z-50 bg-white w-full max-w-full p-4 rounded-lg shadow-md">
        <h2 className="text-6xl text-center font-semibold mb-4">Medication Details</h2>
        <div className=' grid place-content-center my-10'>

        <h3 className=' text-4xl  font-bold n-2'>Medicamento: {medication.name}</h3>
        <p>Description: {medication.description}</p>
        <p>Hora(s) de Consumo: {medication.hora}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2">Close</button>
        </div>
      </div>
    </div>
  );
}

export default MedicationDetail;
