import React from 'react';

function SoloCuandoNececito() {
  const TomarMedicina = [
    {name: "Penecilina",description: "2 pastillas (250mg)", hora:"8:00"},
    {name: "Penecilina",description: "2 pastillas (250mg)", hora:"8:00"},
    {name: "Penecilina",description: "2 pastillas (250mg)", hora:"8:00"},
  ]
  return (
    <div className=' bg-green-800  p-6'>
      <p>Solo Cuando Nececito</p>
      <div className="h-[300px] overflow-y-auto">
  {TomarMedicina.map((TomarMedicinaItem) => {
    return (
      <div className="bg-white p-4" key={TomarMedicinaItem.id}>
        <h1 className="text-center font-semibold text-2xl">{TomarMedicinaItem.hora}</h1>
        <h3 className="text-center">{TomarMedicinaItem.name}</h3>
        <p className="text-center">{TomarMedicinaItem.description}</p>
      </div>
    );
  })}
</div>
    </div>
  )
}


export default SoloCuandoNececito