import React from 'react';
import '../assets/css/RegisterName.css';
import { Link } from 'react-router-dom';

//Import of the components
import { TextBox } from '../components/TextBox';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';

export class RegisterName extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      buttonDisabled: true,
      nameError: false,
      surnameError: false
    };
    this.manageName = this.manageName.bind(this);
    this.manageSurname = this.manageSurname.bind(this);
    this.addField = this.addField.bind(this);
  }

  /**
   * We need to constantly be checking any input change no notify the user 
   * if some character is not a valid one but also to mantain disabled the
   * submit button, and the same with the different fields 
   */
  manageName = (event) => {
    let string = event.target.value; 
    const error = this.manageNameError(string);
    if (!error && string !== '' && !this.state.surnameError && this.state.surname !== '') {
      this.setState({buttonDisabled: false});
    } else {
      this.setState({buttonDisabled: true});
    }
  };

  manageNameError = (string) => {
    this.setState(({name: string}));
    if (/^[a-zA-Zá-üÁ-ÜñÑçÇ ]*$/.test(string)) {
      this.setState({nameError: false});
      return false;
    } else {
      this.setState({nameError: true});
      return true;
    }
  };

  manageSurname = (event) => {
    let string = event.target.value;
    const error = this.manageSurnameError(string);
    if (!error && string !== '' && !this.state.nameError && this.state.name !== '') {
      this.setState({buttonDisabled: false});
    } else {
      this.setState({buttonDisabled: true});
    }
  };

  manageSurnameError = (string) => {
    this.setState(({surname: string}));
    if (/^[a-zA-Zá-üÁ-ÜñÑçÇ ]*$/.test(string)) {
      this.setState({surnameError: false});
      return false;
    } else {
      this.setState({surnameError: true});
      return true;
    }
  };

  addField = (event) => {
    event.preventDefault();
    /**
     * Here, the information submitted should be sended to the back
     */
  };

  render() {
    return (
      <div className="RegisterName">
        <TextBox 
          title = 'Nombre y apellidos'
          text = 'Ingrese sus nombres y apellidos tal y como figuran en su documento de identificación'
        />
        <TextField
          placeholder = 'Nombre'
          onChange = {this.manageName}
          error = {this.state.nameError}
          errorMessage = {'Carácter no válido'}
        />
        <br />
        <TextField
          placeholder = 'Apellidos'
          onChange = {this.manageSurname}
          error = {this.state.surnameError}
          errorMessage = {'Carácter no válido'}
        />
        <br />
        <Button 
          color = 'blue'
          text = 'Continuar'
          onClick = {this.addField}
          route = '/RegisterBirthDate'
          disable = {this.state.buttonDisabled}/> 
      </div>
    );
  }
};
