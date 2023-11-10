import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CloseImg from "../../../../assets/icons/close.svg";
import InfoAlert from '../../../InfoAlert';

function MedicationDetailEdit({ selectedMedicine, setViewDetails, setEditMedicine }) {

  const [infoMessage, setInfoMessage] = useState({
    status: false,
    title: "",
    message: "",
  });

  const handleDelete = () => {
    const sessionToken = localStorage.getItem("session_token")
    axios.delete(`http://127.0.0.1:5000/medicines/${sessionToken}/${selectedMedicine.medicine_group}`)
      .then(res => {
        setInfoMessage({
          status: true,
          title: "Exito",
          message: `Se ha eliminado el medicamento ${selectedMedicine.name_medicine}`
        })
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    if (infoMessage.status === true) {
      setTimeout(
        () => {
          setInfoMessage({ status: false, title: "", message: "" })
          window.location.reload()
        },
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
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
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
              <p className='font-medium text-lg'>Dosis:</p>
              <p className='font-normal'>{selectedMedicine.dose_quantity} {selectedMedicine.type_medicine}</p>
            </div>
          </div>

          {infoMessage.status && (
            <div className="mb-3">
              <InfoAlert
                title={infoMessage.title}
                message={infoMessage.message}
              />
            </div>
          )}

          <div className='mt-4 flex gap-5 w-full justify-center'>
            <button onClick={handleDelete} className="bg-red-400 text-white text-lg px-4 py-2 rounded-md w-[30%]">
              Eliminar
            </button>
            <button onClick={() => setEditMedicine(true)} className='bg-blue-400 text-white px-4 py-2 text-lg rounded-md w-[30%]'>
              Editar
            </button>
          </div>
        </div>


      </motion.div>
    </AnimatePresence>

  )
}

export default MedicationDetailEdit