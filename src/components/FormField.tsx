import React from 'react'
import { IErrors } from './ContactForm'
import { StyledFormField } from '../styles/form-field.css'

type Editor = 'textbox' | 'multilinetextbox'

export interface IFieldProps {
  id: string
  label: string
  type: string
  editor?: Editor
  value?: any
}

export const FormField: React.FunctionComponent<IFieldProps> = ({
  id,
  label,
  editor,
  value
}) => {
  return (
    <StyledFormField>
      <label htmlFor={id}>{label}</label>

      {editor!.toLowerCase() === "textbox" && (
        <input
          id={id}
          type
      )}
    </StyledFormField>
  )
}
