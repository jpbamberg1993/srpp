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
  validate: (fieldName: string) => void
}

export const FormContext = React.createContext<IFormContext|undefined>(undefined)

const encode = (data): string => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

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
    this.validate = this.validate.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  private validate(fieldName: string): string {
    let newError: string = ""

    if (
      this.props.fields[fieldName] &&
      this.props.fields[fieldName].validation
    ) {
      newError = this.props.fields[fieldName].validation.rule(
        this.state.values,
        fieldName,
        this.props.fields[fieldName].validation.args
      )
    }

    this.state.errors[fieldName] = newError
    this.setState({
      errors: { ...this.state.errors, [fieldName]: newError }
    })

    return newError
  } 

  private validateForm(): boolean {
    const errors: IErrors = {}

    Object.keys(this.props.fields).forEach((fieldName: string) => {
      errors[fieldName] = this.validate(fieldName)
    })

    this.setState({ errors })

    return !this.hasErrors(errors)
  }

  private async submitForm(): Promise<boolean> {
    try {
      const body = encode({ 'form-name': 'contact-us', ...this.state.values })
      console.log(body)
      
      const result = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      })
      console.log(result)
      
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  private setValues(values: IValues) {
    this.setState({ values: { ...this.state.values, ...values } })
  }

  render() {
    const { values, submitSuccess, errors } = this.state
    const context: IFormContext = {
      ...this.state,
      validate: this.validate,
      setValues: this.setValues
    }

    return (
      <FormContext.Provider value={context}>
        <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="phoneNumber" />
          <input type="text" name="subject" />
          <textarea name="message"></textarea>
        </form>

        <StyledContactForm onSubmit={this.handleSubmit} noValidate={true}>
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
