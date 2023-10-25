import React from 'react'
import FormAccountRecovery from '../components/FormAccountRecovery'
import FormsFooter from '../components/FormsFooter'

// IMAGENES E ICONOS    
import AccountRecoveryImage from "../assets/images/account-recovery-image.jpg"

function AccountRecovery() {
    return (
        <>
            <main className='bg-[#F2F4EA] px-24 py-20 lg:py-14'>
                <FormAccountRecovery
                    img={AccountRecoveryImage}
                />
            </main>

            <FormsFooter />
        </>
    )
}

export default AccountRecovery