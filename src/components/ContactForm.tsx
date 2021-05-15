import React from 'react'
import 'react-phone-number-input/style.css'
import { StyledContactForm } from '../styles/contact-form.css';

interface IProps {
  action: string;
}

export interface IValues {
  name: string
  email: string
  phoneNumber: string
  subject: string
  message: string
}

export interface IErrors {
  [key: string]: string
}

interface IState {
  values: IValues
  errors: IErrors
  submitSuccess?: boolean
}

class ContactForm extends React.Component<IProps, IState> {
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
  }

  private hasErrors(errors: IErrors): boolean {
    let hasError: boolean = false
    Object.keys(errors).map((key: string): void => {
      if (errors[key].length > 0) {
        hasError = true
      }
    })
    return hasError
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
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

  private validateForm(): boolean {
    return true
  }

  private async submitForm(): Promise<boolean> {
    return true
  }

  render() {
    const { submitSuccess, errors } = this.state

    return (
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

        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.values.name}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.values.email}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Phone number
          <input
            type="tel"
            name="phoneNumber"
            id="phone-number" 
            value={this.state.values.phoneNumber}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            id="subject"
            value={this.state.values.subject}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Message
          <textarea
            name="message"
            id="message"
            rows={5}
            value={this.state.values.message}
            onChange={this.handleInputChange} />
        </label>
        <button type="submit" disabled={this.hasErrors(errors)}>
          Send
        </button>
        <input type="reset" value="Clear" />
      </StyledContactForm>
    )
  }
}

export default ContactForm
