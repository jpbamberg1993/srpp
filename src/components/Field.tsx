import React from 'react'
import { IErrors, IFormContext, FormContext } from './ContactForm';
import { StyledFormField } from '../styles/form-field.css'

type Editor = 'textbox' | 'multilinetextbox'

export interface IFieldProps {
  id: string
  label: string
  editor?: Editor
  value?: any
}

export const Field: React.FunctionComponent<IFieldProps> = ({
  id,
  label,
  editor,
  value
}) => {
  return (
    <FormContext.Consumer>
      {(context: IFormContext) => (
        <StyledFormField>
          <label htmlFor={id}>{label}</label>

          {editor!.toLowerCase() === "textbox" && (
            <input
              id={id}
              type="text"
              value={value}
              onChange={
                (e: React.FormEvent<HTMLInputElement>) => {
                  return context.setValues({[id]: e.currentTarget.value})
                }
              }
              onBlur={(e: React.FormEvent<HTMLInputElement>) => console.log(e)}
              className="formControl"
            />
          )}

          {editor!.toLowerCase() === "multilinetextbox" && (
            <textarea
              id={id}
              value={value}
              onChange={
                (e: React.FormEvent<HTMLTextAreaElement>) => {
                  return context.setValues({[id]: e.currentTarget.value})
                }
              }
              onBlur={(e: React.FormEvent<HTMLTextAreaElement>) => console.log(e)}
              className="formControl"
            />
          )}
        </StyledFormField>
      )}
    </FormContext.Consumer>
  )
}

Field.defaultProps = {
  editor: "textbox"
}
