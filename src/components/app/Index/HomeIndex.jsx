import React from 'react';
import Dosis from './ContenidoIndex/Dosis';
import Historial from './ContenidoIndex/Historial';
import Medicinas from './ContenidoIndex/Medicinas';
function HomeIndex() {


  return (
    <div className='bg-[#F2F4EA]  w-full  grid  sm:p-10 grid-cols-1 sm:grid-cols-2   '>
      <div className=''>
        <Medicinas />
      </div>

      <div className='flex flex-col justify-between'>
        <div className='h-[48%] w-full mb-10'>
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