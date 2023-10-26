import React, { useState } from 'react';
import MedicationDetail from './MedicationDetail'; // Import the MedicationDetail component

function Manana() {
  const TomarMedicina = [
    { name: "Penicilina", description: "2 pastillas (250mg)", hora: "8:00" },
    { name: "Amoxicilina", description: "1 pastilla (500mg)", hora: "8:30" },
    { name: "Ibuprofen", description: "1 tablet (200mg)", hora: "9:00" },
  ];

  const [selectedMedication, setSelectedMedication] = useState(null);

  const openMedicationDetail = (medication) => {
    setSelectedMedication(medication);
  };

  const closeMedicationDetail = () => {
    setSelectedMedication(null);
  };

  return (
    <div className='bg-rose-400 p-6'>
      <p>Mañana</p>
      <div className="h-[300px] overflow-y-auto">
        {TomarMedicina.map((medication, index) => {
          return (
            <div
              className="bg-white p-4 mb-2 cursor-pointer"
              key={index}
              onClick={() => openMedicationDetail(medication)}
            >
              <h1 className="text-center font-semibold text-2xl">{medication.hora}</h1>
              <h3 className="text-center">{medication.name}</h3>
              <p className="text-center">{medication.description}</p>
            </div>
          );
        })}
      </div>
      <MedicationDetail
        isOpen={selectedMedication !== null}
        medication={selectedMedication}
        onClose={closeMedicationDetail}
      />
    </div>
  );
}

export default Manana;
