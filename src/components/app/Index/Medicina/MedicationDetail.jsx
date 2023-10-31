import React from 'react';

function MedicationDetail({selectedMedicine, setViewDetails}) {

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="z-50 bg-white w-3/5 px-10 py-7 rounded-lg shadow-md flex flex-col items-center gap-7">
          <h3 className=' text-4xl italic font-medium n-2'>{selectedMedicine.name_medicine}</h3>

          <div className='flex flex-col gap-5'>
            <p className='font-medium text-lg'>Descripción: 
              <p className='font-normal mt-2'>{selectedMedicine.comments}</p>
            </p>

            <p className='font-medium text-lg'>Hora de Consumo: 
              <p className='font-normal mt-2'>{selectedMedicine.dose_hour}</p>
            </p>
          </div>

          <button onClick={() => setViewDetails(false)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-1/3">
            Close
          </button>
      </div>
    </div>
  );
}

export default MedicationDetail;
