import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const ContactForm: React.FC = () => {
  const [value, setValue] = useState()

  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
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
      <label>
        Phone number
        <PhoneInput
          country="US"
          value={value}
          onChange={setValue} />
      </label>
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
    </form>
  )
}

export default ContactForm