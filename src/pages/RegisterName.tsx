import React, { Reducer, useReducer, useState } from 'react';
import '../assets/css/RegisterName.css';

//Import of the components
import { TextBox } from '../components/TextBox';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';

interface MyState {
  name: string,
  surname: string,
  buttonDisabled: boolean,
  nameError: boolean,
  surnameError: boolean
};

export const RegisterName = () => {
  
  const [state, setState] = useReducer<Reducer<MyState, Partial<MyState>>>(
    (state, newState) => ({...state, ...newState}),
    {name: '', surname: '', buttonDisabled: true, nameError: false, surnameError: false}
  );

  /**
   * We need to constantly be checking any input change no notify the user 
   * if some character is not a valid one but also to mantain disabled the
   * submit button, and the same with the different fields 
   */
  const manageName = (event: Event) => {
    let string = (event.target as HTMLInputElement).value; 
    const error = manageNameError(string);
    if (!error && string !== '' && !state.surnameError && state.surname !== '') {
      setState({buttonDisabled: false});
    } else {
      setState({buttonDisabled: true});
    }
  };

  const manageNameError = (string: string) => {
    if (/^[a-zA-Zá-üÁ-ÜñÑçÇ ]*$/.test(string)) {
      setState({name: string, nameError: false});
      return false;
    } else {
      setState({name: string, nameError: true});
      return true;
    }
  };

  const manageSurname = (event: Event) => {
    let string = (event.target as HTMLInputElement).value;
    const error = manageSurnameError(string);
    if (!error && string !== '' && !state.nameError && state.name !== '') {
      setState({buttonDisabled: false});
    } else {
      setState({buttonDisabled: true});
    }
  };

  const manageSurnameError = (string: string) => {
    if (/^[a-zA-Zá-üÁ-ÜñÑçÇ ]*$/.test(string)) {
      setState({surname: string, surnameError: false});
      return false;
    } else {
      setState({surname: string, surnameError: true});
      return true;
    }
  };

  const addField = (event: Event) => {
    event.preventDefault();
    /**
     * Here, the information submitted should be sended to the back
     */
  };
  
  return (
    <div className="RegisterName">
      <TextBox 
        title = 'Nombre y apellidos'
        text = 'Ingrese sus nombres y apellidos tal y como figuran en su documento de identificación'
      />
      <TextField
        placeholder = 'Nombre'
        onChange = {manageName.bind(this)}
        error = {state.nameError}
        errorMessage = {'Carácter no válido'}
      />
      <br />
      <TextField
        placeholder = 'Apellidos'
        onChange = {manageSurname.bind(this)}
        error = {state.surnameError}
        errorMessage = {'Carácter no válido'}
      />
      <br />
      <Button 
        color = 'blue'
        text = 'Continuar'
        onClick = {addField}
        route = '/RegisterBirthDate'
        disable = {state.buttonDisabled}/> 
    </div>
  );
};