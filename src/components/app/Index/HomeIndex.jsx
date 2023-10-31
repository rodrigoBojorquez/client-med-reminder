import React from 'react';
import Dosis from './ContenidoIndex/Dosis';
import Historial from './ContenidoIndex/Historial';
import Medicinas from './ContenidoIndex/Medicinas';
function HomeIndex() {


  return (
    <div className='bg-[#F2F4EA] h-[90vh] w-full grid grid-cols-2 shadow-2xl  p-16'>
      <div className='h-full'>
        <Medicinas />
      </div>

      <div className='flex flex-col justify-between'>
        <div className='h-[48%] w-full'>
          <Dosis />
        </div>
        <div className='h-[48%] w-full'>
          <Historial />
        </div>
      </div>

    </div>
  )
}

export default HomeIndex