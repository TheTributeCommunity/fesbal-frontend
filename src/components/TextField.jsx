import React from 'react';
import '../assets/css/TextField.css';
import warningSymbol from '../assets/images/warningSymbol.png';

export class TextField extends React.Component {

  render () {
    return (
      <form
        className = 'textForm'
        autoComplete = 'off'
        onSubmit = {this.submitForm}
        onFocus = {this.props.onFocus}
        onBlur = {this.props.onFocus}
        >
        <input
          className = 'textInput'
          type = 'text'
          placeholder = {this.props.placeholder}
          name = 'text'
          onChange = {this.props.onChange}
          readOnly = {this.props.readOnly}
        />
        <img className = {`imgField ${this.props.image ? '' : 'disable'}`} src = {this.props.image} alt = 'imagen input'/>
        <h4 className = {`errorMessage ${this.props.error ? '' : 'disable'}`}>
          <img 
            className = {`imgErrorField`}
            src = {warningSymbol}
            alt = 'imagen-error'/>{this.props.errorMessage}</h4>
      </form>
    );
  }
};