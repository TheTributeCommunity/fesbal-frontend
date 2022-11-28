import '../assets/css/RegisterBirthDate.css';
import React, { Reducer, useReducer } from 'react';
import Calendar from 'react-calendar';
import '../assets/css/Calendar.css';
import calendarBlue from '../assets/images/calendarBlue.png';

//Import of the components
import { TextBox } from '../components/TextBox';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';

interface State {
  day: number,
  month: number,
  year: number,
  buttonDisabled: boolean,
  placeholder: string,
  invalidDate: boolean,
  errorMessage: string,
  calendarDisabled: boolean
};

export const RegisterBirthDate = () => {

  const [state, setState] = useReducer<Reducer<State, Partial<State>>>(
    (state, newState) => ({...state, ...newState}),
    { day: 0,
      month: 0,
      year: 0,
      buttonDisabled: true,
      placeholder: 'Fecha de nacimiento',
      invalidDate: false,
      errorMessage: '',
      calendarDisabled: true
    });

  const activateCalendar = () => { // if !calendarDisabled, focus on calendar also disable the calendar
    setState({calendarDisabled: false});
  };

  const manageForm = (date: Date) => {
    if (isValidDate(date)) {
      setState({invalidDate: false});
      manageDate(date);
      manageComponents(date);
    } else {
      setState({invalidDate: true});
    }
  }

  const isValidDate = (date: Date) => {
    const currentDate = new Date();
    setState({errorMessage: 'La fecha es posterior al día de hoy'});
    if (currentDate >= date) {
    setState({errorMessage: 'Debes ser mayor de 18 años para registrarte'});
      if (getAge(date) >= 18) {
        return true;
      }
    }
    return false;
  };

  const getAge = (birthDate: Date) => {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const months = currentDate.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const manageDate = (date: Date) => {
    setState({day: date.getDate()});
    setState({month: date.getMonth() + 1});
    setState({year: date.getFullYear()});
  }

  const manageComponents = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setState({buttonDisabled: false});
    setState({placeholder: day + '/' + month + '/' + year})
  }

  const addField = (event: Event) => {
    event.preventDefault();
    /*
      Here it connects with the back and the information is sended
    */
  };

  return (
    <div className = "RegisterBirthDate">
      <TextBox 
        title = 'Fecha de nacimiento'
        text = 'Indique su fecha de nacimiento tal y como figuran en su documento de identificación'
      />
      <br />
      <TextField
        placeholder = {state.placeholder}
        readOnly = {true}
        onFocus = {activateCalendar}
        image = {calendarBlue}
        error = {state.invalidDate}
        errorMessage = {state.errorMessage}
      />
      <Calendar 
        className = {`CalendarContainer ${state.calendarDisabled ? 'disable' : ''}`}
        onChange = {manageForm}
      />
        <br/>
      <Button 
        color = 'blue'
        text = 'Continuar'
        onClick = {addField}
        route = '/home'
        disable = {state.buttonDisabled}
      />
    </div>
  );
};