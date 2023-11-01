import React, { useState } from 'react';
import MedicationDetail from './MedicationDetail'; // Importa el componente MedicationDetail
import EditMeModal from './EditMeModal';

function Noche({evening, setMedicines, date}) {

  const [viewDetails, setViewDetails] = useState(false)
  const [editMedicine, setEditMedicine] = useState(false)
  const [selectedMedicine, setSelectedMedicine] = useState({
    name_medicine: "",
    dose_hour: "",
    dose_quantity: "",
    type_medicine: "",
    comments: "",
    status: "",
    medicine_group: ""
  });

  const medicineDetails = medicine => {
    setViewDetails(true)
    setSelectedMedicine({
      name_medicine: medicine.name_medicine,
      dose_hour: medicine.dose_hour,
      dose_quantity: medicine.dose_quantity,
      type_medicine: medicine.type_medicine,
      comments: medicine.comments,
      status: medicine.status,
      medicine_group: medicine.medicine_group
    })
  }

  return (
    <div className='bg-[#8EACCD] px-6 py-3 rounded-md'>
      <p className='text-center text-lg font-medium mb-2'>Noche</p>
      <div className="h-[400px] overflow-y-auto">
        {evening.map((medicine, index) =>
          (
            <div
              className="bg-white p-4 mb-2 cursor-pointer"
              key={index}
              onClick={() => medicineDetails(medicine)}
            >
              <h1 className="text-center font-semibold text-2xl">{medicine.dose_hour.substring(0, medicine.dose_hour.length - 3)}</h1>
              <h3 className="text-center italic font-medium mb-3">{medicine.name_medicine}</h3>
              <p className="text-center font-medium">{medicine.dose_quantity}</p>
            </div>
          )
        )}
      </div>
      {viewDetails &&
        (
        <MedicationDetail
          selectedMedicine={selectedMedicine}
          setViewDetails={setViewDetails}
          setEditMedicine={setEditMedicine}
        />
        )
      }
      {editMedicine && (
        <EditMeModal 
          setEditMedicine={setEditMedicine}
          selectedMedicine={selectedMedicine}
          setMedicines={setMedicines}
          date={date}
          setViewDetails={setViewDetails}
        />
      )}
    </div>
  );
}

export default Noche;
