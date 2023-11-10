import React, { useState } from 'react';
import EditMeModal from './EditMeModal';
import MedicationDetail from './MedicationDetail';

function Manana({morning, setMedicines, date}) {

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
    setSelectedMedicine(medicine)
  }

  return (
    <div className='bg-[#C0DBEA] px-6 py-3 rounded-md'>
      <p className='text-center text-lg font-medium mb-2'>Mañana</p>
      <div className="h-[400px] overflow-y-auto">
        {morning.map((medicine, index) =>
          (
            <div
              className={"bg-white p-4 mb-2 cursor-pointer"}
              key={index}
              onClick={() => medicineDetails(medicine)}
            >
              <h1 className={medicine.status === "atrasado" ? "text-center font-semibold text-2xl text-red-500" : medicine.status === "a tiempo" ? "text-center font-semibold text-2xl text-green-500" : "text-center font-semibold text-2xl"}>{medicine.dose_hour.substring(0, medicine.dose_hour.length - 3)}</h1>
              <h3 className={medicine.status === "atrasado" ? "text-center  italic font-medium mb-3  text-red-500" : medicine.status === "a tiempo" ? "text-center  italic font-medium mb-3  text-green-500" : "text-center  italic font-medium mb-3 "}>{medicine.name_medicine}</h3>
              <p className={medicine.status === "atrasado" ? "text-center  font-medium  text-red-500" : medicine.status === "a tiempo" ? "text-center  font-medium  text-green-500" : "text-center  font-medium"}>{medicine.dose_quantity} <span>{medicine.type_medicine}</span></p>
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

export default Manana;
