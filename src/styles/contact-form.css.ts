import { styled } from './theme'

export const StyledContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;

  button {
    background: #b11adc;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  button:hover {
    cursor: pointer;
    background: white;
    border: 1px solid #b11adc;
    color: #b11adc;
  }

  button:disabled {
    background: grey;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    justify-self: center;

    button {
      justify-self: end;
      margin-right: 15px;
    }
  }
`
