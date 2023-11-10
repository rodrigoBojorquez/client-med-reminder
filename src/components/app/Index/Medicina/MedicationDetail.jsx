import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CloseImg from "../../../../assets/icons/close.svg";
import InfoAlert from '../../../InfoAlert';



function MedicationDetail({ selectedMedicine, setViewDetails, setEditMedicine }) {
  const [infoMessage, setInfoMessage] = useState({
    status: false,
    title: "",
    message: "",
  });

  const checkDayHour = (day, hour) => {
    const currentDateTime = `${day} ${hour}`;
    console.log("1.- ", currentDateTime)
    const medicineDateTime = `${selectedMedicine.dose_day} ${selectedMedicine.dose_hour}`;
    console.log("2.- ", medicineDateTime)

    if (new Date(currentDateTime) <= new Date(medicineDateTime)) {
      return "a tiempo";
    } else {
      return 'atrasado';
    }
  }

  const handleTakeMedicine = () => {
    const session_token = localStorage.getItem("session_token")

    const now = new Date();
    const newDay = now.toISOString().slice(0, 10);
    const newHour = now.toLocaleTimeString();

    const status = {
      "name_status": checkDayHour(newDay, newHour)
    };

    axios.patch(`http://127.0.0.1:5000/medicines/${session_token}/${selectedMedicine.id_medicine}`, status)
      .then(res => {
        setInfoMessage({
          status: true,
          title: "Perfecto!",
          message: res.data.Message,
        });
      })
      .catch(err => {
        console.log(err)
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
              <p className='font-medium text-lg'>Hora de Consumo:</p>
              <p className='font-normal'>{selectedMedicine.dose_hour}</p>
            </div>
            <div>
              <p className='font-medium text-lg'>Estado:</p>
              <p className='font-normal'>{selectedMedicine.status}</p>
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

          {selectedMedicine.status === "por tomar" && (
            <div className='mt-4 flex gap-5 w-full justify-center'>
              <button onClick={handleTakeMedicine} className="bg-green-500 text-white text-lg px-4 py-2 rounded-md w-[30%]">
                Tomar
              </button>
              {/* <button onClick={() => setEditMedicine(true)} className='bg-blue-400 text-white px-4 py-2 text-lg rounded-md w-[30%]'>
            Editar
          </button> */}
            </div>
          )}
        </div>
      </motion.div>

    </AnimatePresence>

  );
}

export default MedicationDetail;