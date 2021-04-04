import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import { ContactFormElement } from '../styles/contact-form-element';

const ContactForm: React.FC = () => {
  return (
    <ContactFormElement method="post" name="contact" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      {/* <label>
        Phone number
        <input type="tel" name="phone number" id="phone-number" />
      </label> */}
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows={5} />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </ContactFormElement>
  )
}

export default ContactForm
