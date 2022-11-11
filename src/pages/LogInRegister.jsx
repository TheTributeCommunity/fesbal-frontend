import React from 'react';
import '../assets/css/LogInRegister.css';
import { Link } from 'react-router-dom';

//Components imports
import { Logo } from '../components/Logo'; 
import { Button } from '../components/Button';


export class LogInRegister extends React.Component {
  render () {
    return (
      <div className = "LogInRegister">
        <div className = 'logo-container'>
          <Logo 
            color = 'blue'
          />
        </div>
        <div className = 'button-container'>
          <Link to = '/RegisterTermsConditions'>
            <Button
              color = 'darkBlue'
              text = 'Crear cuenta'
              route = '/RegisterTermsConditions'
            />
          </Link>
          <Button
            color = 'blue'
            text = 'Iniciar sesión'
          />
        </div> 
      </div>
    );
  };
};
