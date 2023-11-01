import React, { useState } from 'react';

import CloseImg from "../../../../assets/icons/close.svg"

function MedicationDetail({selectedMedicine, setViewDetails, setEditMedicine}) {

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="z-50 bg-white w-3/5 px-10 py-7 rounded-lg shadow-md flex flex-col items-center gap-7">
          <div className='flex justify-end items-center w-full'>
            <h3 className=' text-4xl italic font-medium n-2 text-center w-[90%]'>{selectedMedicine.name_medicine}</h3>
            <button onClick={() => setViewDetails(false)} className='w-'>
              <img src={CloseImg} alt="Close modal" />   
            </button> 
          </div>
 
          <div className='flex flex-col gap-5'>
            <div>
              <p className='font-medium text-lg'>Descripción:</p>
              <p className='font-normal'>{selectedMedicine.comments}</p>
            </div>
            <div>
              <p className='font-medium text-lg'>Hora de Consumo:</p>
              <p className='font-normal'>{selectedMedicine.dose_hour}</p>
            </div>
          </div>

          <div className='mt-4 flex gap-5 w-full justify-center'>
            <button  className="bg-green-500 text-white text-lg px-4 py-2 rounded-md w-[30%]">
              Tomada
            </button>
            <button onClick={() => setEditMedicine(true)} className='bg-blue-400 text-white px-4 py-2 text-lg rounded-md w-[30%]'>
              Editar
            </button>
          </div>
      </div>
    </div>
  );
}

export default MedicationDetail;
