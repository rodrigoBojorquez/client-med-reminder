import React from 'react'
import FormSignUp from '../components/FormSignUp'
import FormsFooter from '../components/FormsFooter'

// IMAGENES E ICONOS
import SignUpImage from "../assets/images/singup-image.jpg"

function SignUp() {
    return (
        <>
            <main className='bg-[#F2F4EA] px-24 py-20 lg:py-14'>
                <FormSignUp
                    img={SignUpImage}
                />
            </main>

            <FormsFooter />
        </>
    )
}

export default SignUp