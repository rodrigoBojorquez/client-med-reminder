import React from 'react';

function Tarde() {
  const TomarMedicina = [
    {name: "Penecilina",description: "2 pastillas (250mg)", hora:"4:00"},
    {name: "Penecilina",description: "2 pastillas (250mg)", hora:"4:00"},
    {name: "Penecilina",description: "2 pastillas (250mg)", hora:"4:00"},
  ]
  return (
    <div className=' bg-teal-400  p-6'>
      <p>Tarde</p>
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

export default Tarde