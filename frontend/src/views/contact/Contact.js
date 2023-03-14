import React from 'react'
import '../../generalStyle.css'
import './style.css'
import ContactForm from './parts/ContactForm';
import ContactMap from './parts/ContactMap';

function Contact() {
      return (
        <div className='ContactMain'>

            <ContactForm />
            <ContactMap />
            
        </div>
      )
  }


export default Contact;