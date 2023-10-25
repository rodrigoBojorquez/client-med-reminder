import React from 'react';
import Dosis from './ContenidoIndex/Dosis';
import Historial from './ContenidoIndex/Historial';
import Medicinas from './ContenidoIndex/Medicinas';
function HomeIndex() {


  return (
    <div className='h-screen bg-[#F2F4EA] grid grid-cols-2 shadow-2xl  p-16'>
      <Medicinas />
      <div>
        <Dosis />
        <Historial />
      </div>
    </div>
  )
}

export default HomeIndex