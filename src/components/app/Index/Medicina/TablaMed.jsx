import React, { useState } from 'react';
import Navbar from '../Navbar';
import AddMedModal from './AddMeModal';
import Manana from './Manana';
import Noche from './Noche';
import SoloCuandoNececito from './SoloCuandoNececito';
import Tarde from './Tarde';

function TablaMed() {
    const [showAddMedModal, setShowAddMedModal] = useState(false);

    const handleAddMedClick = () => {
        setShowAddMedModal(true);
    };

    const handleCloseModal = () => {
        setShowAddMedModal(false);
    };

    return (
        <div>
            <Navbar />
            <div className='bg-[#F2F4EA] h-screen w-auto grid place-content-center'>
                <div className='bg-white m-2 p-10'>
                    {/* <h1 className='text-3xl text-[#1F4D36] text-center '>Tabla de Medicamentos</h1> */}
                    <h3 className='text-4xl text-[#429b6e] text-center mb-4'>
                        <button className='font-bold '>{"<<"}</button> dd/mm/yy <button className='font-bold'>{">>"}</button>
                    </h3>
                    <section className='grid grid-cols-4 gap-5'>
                        <div>
                            <Manana />
                        </div>

                        <div>
                            <Tarde />
                        </div>
                        <div>
                            <Noche />
                        </div>
                        <div>
                            <SoloCuandoNececito />
                        </div>
                        <button onClick={handleAddMedClick} className=' text-white bg-blue-500 p-2 rounded-xl '>Agregar Medicamento</button>
                    </section>
                </div>
            </div>
            <AddMedModal showAddMedModal={showAddMedModal} handleCloseModal={handleCloseModal} />



        </div>
    );
}

export default TablaMed;
