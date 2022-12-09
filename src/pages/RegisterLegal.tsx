import React from 'react';
import '../assets/css/RegisterLegal.css';
import { Link } from 'react-router-dom';

//Import of the components
import { Logo } from '../components/Logo';
import { TextBox } from '../components/TextBox';
import { Button } from '../components/Button';

export const RegisterLegal = () => {
  return (
    <div className="RegisterLegal-container">
      <div className = 'legal-logo-container'>
        <Logo 
          color = 'blue'
        />
      </div>
      <div className = 'terms-container'>
        <TextBox
          title = 'Crear cuenta'
          text = {'Para poder ser beneficiario del Banco de Alimentos debes primero acudir a un centro de Servicios sociales de tu comunidad.\n\nAllí obtendrás una hoja de derivación que te pediremos al final de tu proceso de alta.'}
          subtext = {'Al proceder estás aceptando nuestros\n'}
          link = 'https://www.theagilemonkeys.com/'
          linkText = 'Términos y condiciones.'
          />
        <Link to = '/RegisterName'>
          <Button 
            color = 'blue'
            text = 'Comenzar Solicitud'
          />
        </Link>
      </div>
    </div>
  );
};

