import React from 'react'
import { FormspreeProvider } from '@formspree/react'
import { ContactContentBox, ContactSection } from './contactElements'
import Form from './Form'

const Contact = () => {
    return (
        <>
            <FormspreeProvider project="1816314032714415621">
            <ContactSection name = 'contact'>
                <ContactContentBox>
                    <Form/>
                </ContactContentBox>
            </ContactSection>
            </FormspreeProvider>
        </>
    )
}

export default Contact
