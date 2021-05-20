import React from 'react'
import { IErrors, IFormContext, FormContext } from './Form';
import { StyledFormField } from '../styles/form-field.css'
import { IValidation } from '../utils/validations';

type Editor = 'textbox' | 'multilinetextbox'

export interface IFieldProps {
  id: string
  label: string
  editor?: Editor
  value?: any
  validation?: IValidation
}

const getError = (errors: IErrors, id: string): string => {
  if (Object.prototype.hasOwnProperty.call(errors, id)) {
    return errors[id]
  }
  return ''
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

          {editor.toLowerCase() === "textbox" && (
            <input
              id={id}
              type="text"
              value={value}
              onChange={
                (e: React.FormEvent<HTMLInputElement>) => {
                  return context.setValues({[id]: e.currentTarget.value})
                }
              }
              onBlur={(e: React.FormEvent<HTMLInputElement>) => context.validate(id)}
              className="formControl"
            />
          )}

          {editor.toLowerCase() === "multilinetextbox" && (
            <textarea
              id={id}
              value={value}
              onChange={
                (e: React.FormEvent<HTMLTextAreaElement>) => {
                  return context.setValues({[id]: e.currentTarget.value})
                }
              }
              onBlur={(e: React.FormEvent<HTMLTextAreaElement>) => context.validate(id)}
              className="formControl"
            />
          )}

          {getError(context.errors, id) && (
            <div style={{ color: "red", fontSize: "80%" }}>
              <p>{getError(context.errors, id)}</p>
            </div>
          )}
        </StyledFormField>
      )}
    </FormContext.Consumer>
  )
}

Field.defaultProps = {
  editor: "textbox"
}
