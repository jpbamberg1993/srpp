import React from 'react'

import contactStyles from '../styles/contact.module.css'
import facebookIcon from '../images/facebook-icon.svg'
import mailIcon from '../images/mail-outline-icon.svg'
import phoneIcon from '../images/phone-icon.svg'

const Contact: React.FC = () => (
  <ul className={contactStyles.contactList}>
    <li>
      <a href='https://www.facebook.com/srppfl' rel='external'>
        <img src={facebookIcon} alt='facebook icon' />
      </a>
    </li>
    <li>
      <a href='maitto:southreefpp@gmail.com' rel='reply-to'>
        <img src={mailIcon} alt='email me icon' />
      </a>
    </li>
    <li>
      <a href='tel:+19547295014' rel='nofollow' className={contactStyles.phoneNumberLink}>
        <img src={phoneIcon} alt='call phone number icon' />
        <span>954-729-5014</span>
      </a>
    </li>
  </ul>
)

export default Contact
