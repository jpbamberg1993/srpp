import React from 'react'
import Form, { IFields } from './Form'
import { Field } from './Field';

export const ContactForm: React.FunctionComponent = () => {
  const fields: IFields = {
    name: {
      id: 'name',
      label: 'Name'
    },
    email: {
      id: 'email',
      label: 'Email'
    },
    phoneNumber: {
      id: 'phoneNumber',
      label: 'Phone number'
    },
    subject: {
      id: 'subject',
      label: 'Subject'
    },
    message: {
      id: 'message',
      label: 'Message',
      editor: 'multilinetextbox'
    }
  }

  return (
    <Form
      action="netlify"
      fields={fields} 
      render={() => (
        <React.Fragment>
          <Field {...fields.name} />
          <Field {...fields.email} />
          <Field {...fields.phoneNumber} />
          <Field {...fields.subject} />
          <Field {...fields.message} />
        </React.Fragment>
      )}
    />
  )
}

export default ContactForm
