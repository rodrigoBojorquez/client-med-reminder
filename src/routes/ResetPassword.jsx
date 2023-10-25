import React from 'react'
import FormResetPassword from '../components/FormResetPassword'
import FormsFooter from '../components/FormsFooter'

// IMAGENES E ICONOS
import ResetPasswordImage from "../assets/images/password-change-image.jpg"


function ResetPassword() {
    return (
        <div className='h-screen'>
            <main className='bg-[#F2F4EA] px-24 py-20 lg:py-14'>
                <FormResetPassword
                    img={ResetPasswordImage}
                />
            </main>
            <FormsFooter />
        </div>
    )
}

export default ResetPassword