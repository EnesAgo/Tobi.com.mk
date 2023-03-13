import React from 'react'
import '../../generalStyle.css'
import ContactForm from './parts/ContactForm';
import ContactMap from './parts/ContactMap';
import './style.css'

function Contact() {
      return (
        <div className='ContactMain'>

            <ContactForm />
            <ContactMap />
            
        </div>
      )
  }


export default Contact;