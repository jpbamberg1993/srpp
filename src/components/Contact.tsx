import React from 'react'
import { styled } from '../styles/theme'

import facebookIcon from '../images/facebook-icon.svg'
import mailIcon from '../images/mail-outline-icon.svg'
import phoneIcon from '../images/phone-icon.svg'
import logo from '../images/logo.svg'

const ContactList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr repeat(2, 50px) auto;
  justify-content: end;
  align-items: center;
  grid-gap: 10px;
  margin: 5px;
  height: 80px;

  img {
    width: 50px;
    margin-bottom: 0;
  }

  li {
    margin-bottom: 0;
  }

  li:first-child {
    display: grid;
    align-items: center;
  }

  li:first-child img {
    width: 80px;
  }

  @media (min-width: 481px) {
    li:last-child {
      margin-bottom: 6px;
    }
  }

  @media (min-width: 768px) {
    width: 768px;
    justify-self: center;
  }
`

const PhoneNumberLink = styled.a`
  @media (max-width: 480px) {
    & > span {
      display: none;
    }
  }

  @media (min-width: 481px) {
    & > img {
      display: none;
    }

    font-size: 1.5rem;
  }
`

const Contact: React.FC = () => (
  <ContactList>
    <li>
      <img src={logo} alt='logo' />
    </li>
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
      <PhoneNumberLink href='tel:+19547295014' rel='nofollow'>
        <img src={phoneIcon} alt='call phone number icon' />
        <span>954-729-5014</span>
      </PhoneNumberLink>
    </li>
  </ContactList>
)

export default Contact
