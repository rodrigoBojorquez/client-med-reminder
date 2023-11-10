import {useState, useEffect} from "react"
import axios from "axios"
import Dosis from './ContenidoIndex/Dosis';
import Historial from './ContenidoIndex/Historial';
import Medicinas from './ContenidoIndex/Medicinas';
function HomeIndex() {

  const [medicinasPendientes, setMedicinasPendientes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("session_token");
    if (token !== null) {
        axios.get(`http://127.0.0.1:5000/medicines/pending/${token}`)
            .then(res => {  
                if (res.data.Message === "Medicamentos pendientes") {
                    console.log(res)
                    const pendingMedicines = res.data.Data.filter(medicina => {
                        // Parse la fecha y hora de la medicina
                        const medicineDateTime = new Date(`${medicina.dose_day}T${medicina.dose_hour}`);
                        // Compara si la fecha de la medicina es mayor o igual a la fecha actual
                        return medicineDateTime
                    });
                    setMedicinasPendientes(pendingMedicines);
                } else {
                    console.log("No se encontraron medicamentos pendientes");
                }
            })
            .catch(err => {
                console.error("Ha ocurrido un error", err);
            });
    }
  }, []);

  return (
    <div className='bg-[#F2F4EA] h-[90vh] w-full grid grid-cols-2 shadow-2xl  p-16'>
      <div className='h-full'>
        <Medicinas 
          medicinasPendientes={medicinasPendientes}
        />
      </div>

      <div className='flex flex-col justify-between'>
        <div className='h-[48%] w-full mb-10'>
          <Dosis 
            medicinasPendientes={medicinasPendientes}
          />
        </div>
        <div className='h-[48%] w-full'>
          <Historial />
        </div>
      </div>

    </div>
  )
}

export default HomeIndex