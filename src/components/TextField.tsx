import React from 'react';
import '../assets/css/TextField.css';
import warningSymbol from '../assets/images/warningSymbol.png';

interface Props {
  placeholder: string
  error: boolean
  errorMessage: string
  onChange?: Function
  onFocus?: Function
  readOnly?: boolean
  image?: string
};

export const TextField = ({placeholder, error, errorMessage, onChange, onFocus, readOnly, image}: Props) => {

  return (
    <form
      className = 'textForm'
      autoComplete = 'off'
      onFocus = {onFocus?.bind(this)}
      >
      <input
        className = 'textInput'
        type = 'text'
        placeholder = {placeholder}
        name = 'text'
        onChange = {onChange?.bind(this)}
        readOnly = {readOnly}
      />
      <img className = {`imgField ${image ? '' : 'disable'}`} src = {image} alt = 'imagen input'/>
      <h4 className = {`errorMessage ${error ? '' : 'disable'}`}>
        <img 
          className = {`imgErrorField`}
          src = {warningSymbol}
          alt = 'imagen-error'/>{errorMessage}</h4>
    </form>
  );
};