import { styled } from './theme'

export const StyledFormCol = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  .form-field {
    display: block;
    margin-bottom: 16px;
  }

  .form-field--is-active .form-field__control::after {
    border-bottom: 2px solid #b11adc;
    transform: scaleX(150);
  }

  .form-field--is-active .form-field__label {
    color: #b11adc;
    font-size: 0.75rem;
    transform: translateY(-14px);
  }

  .form-field--is-filled .form-field__label {
    font-size: 0.75rem;
    transform: translateY(-14px);
  }

  .form-field__label {
    display: block;
    font-size: 1.2rem;
    font-weight: normal;
    left: 0;
    margin: 0;
    padding: 18px 0 0 ;
    position: absolute;
    top: 0;
    transition: all 0.4s;
    width: 100%;
  }

  .form-field__control {
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    position: relative;
    width: 100%;
  }  

  .form-field__control::after {
    border-bottom: 2px solid #b11adc;
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    transform: scaleX(0);
    transition: all 0.4x;
    width: 1%;
  }

  .form-field__input,
  .form-field__textarea {
    appearance: none;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #999;
    color: #333;
    display: block;
    font-size: 1.2rem;
    margin-top: 24px;
    outline: 0;
    padding: 0 12px;
    width: 100%;
  }

  .form-field__textarea {
    height: 150px;
  }

  .error {
    margin-bottom: 0;
  }
`
