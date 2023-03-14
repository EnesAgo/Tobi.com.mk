import React from 'react'
import '../style.css'
import '../../../generalStyle.css'


function ContactForm() {

      return (
        <div className='register'>

        <form action="https://formspree.io/f/xdovdlrv" method="POST">
            <input required type="text" name="name&surname" placeholder='name surname' />

            <input type="email" name="email" placeholder='E-Mail' />

            <input type="text" name="phone" placeholder='phone number' />

            <textarea required name="text" placeholder='your text'></textarea>

            <button type="submit">submit</button>
        </form>

      </div>
      )
  }


export default ContactForm;
