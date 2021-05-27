import React from 'react'
import Form, { IFields } from './Form'
import { Field } from './Field';
import { required, isEmail, isPhoneNumber } from '../utils/validations';
import { StyledFormRow } from '../styles/form-row.css';

export const ContactForm: React.FunctionComponent = () => {
  const fields: IFields = {
    firstName: {
      id: 'firstName',
      label: 'First name',
      validation: { rule: required }
    },
    lastName: {
      id: 'lastName',
      label: 'Last name',
      validation: { rule: required }
    },
    email: {
      id: 'email',
      label: 'Email',
      validation: { rule: isEmail }
    },
    phoneNumber: {
      id: 'phoneNumber',
      label: 'Phone number',
      validation: { rule: isPhoneNumber }
    },
    subject: {
      id: 'subject',
      label: 'Subject',
      validation: { rule: required }
    },
    message: {
      id: 'message',
      label: 'Message',
      editor: 'multilinetextbox',
      validation: { rule: required }
    }
  }

  return (
    <Form
      action="netlify"
      fields={fields} 
      render={() => (
        <React.Fragment>
          <StyledFormRow>
            <Field {...fields.firstName} />
            <Field {...fields.lastName} />
          </StyledFormRow>
          <StyledFormRow>
            <Field {...fields.email} />
          </StyledFormRow>
          <StyledFormRow>
            <Field {...fields.phoneNumber} />
          </StyledFormRow>
          <StyledFormRow>
            <Field {...fields.subject} />
          </StyledFormRow>
          <StyledFormRow>
            <Field {...fields.message} />
          </StyledFormRow>
        </React.Fragment>
      )}
    />
  )
}

export default ContactForm
