import React from 'react'
import 'react-phone-number-input/style.css'
import { StyledContactForm } from '../styles/contact-form.css'
import { Field, IFieldProps } from './Field';

export interface IFields {
  [key: string]: IFieldProps
}

interface IProps {
  action: string
  fields: IFields
  render: () => React.ReactNode
}

export interface IValues {
  [key: string]: string
}

export interface IErrors {
  [key: string]: string
}

interface IState {
  values: IValues
  errors: IErrors
  submitSuccess?: boolean
}

export interface IFormContext extends IState {
  setValues: (value: IValues) => void
}

export const FormContext = React.createContext<IFormContext|undefined>(undefined)

class Form extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    const errors: IErrors = {}

    const values: IValues = {
      name: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    }

    this.state = {
      errors,
      values
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.setValues = this.setValues.bind(this)
  }

  private hasErrors(errors: IErrors): boolean {
    let hasError: boolean = false
    Object.keys(errors).forEach((key: string) => {
      if (errors[key].length > 0) {
        hasError = true
      }
    })

    return hasError
  }

  private handleInputChange(
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    const target = e.target
    const value = target.value
    const name = target.name

    const values = {...this.state.values}
    values[name] = value
    this.setState({values})
  }

  private async handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm()
      this.setState({ submitSuccess })
    }
  }

  // private validate(fieldName: string): string {
  //   let newError: string = ""

  //   if (
  //     this.props.fields
  //   )
  // } 

  private validateForm(): boolean {
    // todo: validate the form
    return true
  }

  private async submitForm(): Promise<boolean> {
    // todo: submit the form
    return true
  }

  private setValues(values: IValues) {
    this.setState({ values: { ...this.state.values, ...values } })
  }

  render() {
    const { values, submitSuccess, errors } = this.state
    const context: IFormContext = {
      ...this.state,
      setValues: this.setValues
    }

    return (
      <FormContext.Provider value={context}>
        <StyledContactForm 
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          noValidate={true}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          {this.props.render()}

          <button type="submit" disabled={this.hasErrors(errors)}>
            Send
          </button>

          {submitSuccess && (
            <p className="alter alert-info" role="alert">
              The form was successfully submitted!
            </p>
          )}
          {submitSuccess === false && !this.hasErrors(errors) && (
            <p className="alert alert-danger" role="alert">
              Sorry, an unexpected error occurred.
            </p>
          )}
          {submitSuccess === false && this.hasErrors(errors) && (
            <p className="alert alert-danger" role="alert">
              Sorry, the form is invalid. Please review, update and try again.
            </p>
          )}
        </StyledContactForm>
      </FormContext.Provider>
    )
  }
}

export default Form
