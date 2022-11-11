import '../assets/css/RegisterBirthDate.css';
import React from 'react';
import Calendar from 'react-calendar';
import '../assets/css/Calendar.css';
import calendarBlue from '../assets/images/calendarBlue.png';

//Import of the components
import { TextBox } from '../components/TextBox';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';

export class RegisterBirthDate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      day: '',
      month: '',
      year: '',
      buttonDisabled: true,
      placeholder: 'Fecha de nacimiento',
      invalidDate: false,
      errorMessage: '',
      calendarDisabled: true
    };
    this.activateCalendar = this.activateCalendar.bind(this);
    this.addField = this.addField.bind(this);
    this.addField = this.addField.bind(this);
  }

  activateCalendar = () => { // if !calendarDisabled, focus on calendar also disable the calendar
    this.setState({calendarDisabled: false});
  };

  manageForm = (date) => {
    if (this.isValidDate(date)) {
      this.setState({invalidDate: false});
      this.manageDate(date);
      this.manageComponents(date);
    } else {
      this.setState({invalidDate: true});
    }
  }

  isValidDate = (date) => {
    const currentDate = new Date();
    this.setState({errorMessage: 'La fecha es posterior al día de hoy'});
    if (currentDate >= date) {
    this.setState({errorMessage: 'Debes ser mayor de 18 años para registrarte'});
      if (this.getAge(date) >= 18) {
        return true;
      }
    }
    return false;
  };

  getAge = (birthDate) => {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const months = currentDate.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(age);
    return age;
  };

  manageDate = (date) => {
    this.setState({day: date.getDate()});
    this.setState({month: date.getMonth() + 1});
    this.setState({year: date.getFullYear()});
  }

  manageComponents = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    this.setState({buttonDisabled: false});
    this.setState({placeholder: day + '/' + month + '/' + year})
  }

  addField = (event) => {
    event.preventDefault();
    /*
      Here it connects with the back and the information is sended
    */
  };

  render() {
    return (
      <div className = "RegisterBirthDate">
        <TextBox 
          title = 'Fecha de nacimiento'
          text = 'Indique su fecha de nacimiento tal y como figuran en su documento de identificación'
        />
        <br />
        <TextField
          className = 'TextContainer'
          placeholder = {this.state.placeholder}
          readOnly = {true}
          onFocus = {this.activateCalendar}
          image = {calendarBlue}
          error = {this.state.invalidDate}
          errorMessage = {this.state.errorMessage}/>
        <Calendar 
          className = {`CalendarContainer ${this.state.calendarDisabled ? 'disable' : ''}`}
          onChange = {this.manageForm}/>
          <br/>
        <Button 
          color = 'blue'
          text = 'Continuar'
          onClick = {this.addField}
          route = '/home'
          disable = {this.state.buttonDisabled}/>
      </div>
    );
  }
};