import React from 'react';
import '../assets/css/Logo.css';
import blueLogo from '../assets/images/blueLogo.png';
import whiteLogo from '../assets/images/whiteLogo.png';

export class Logo extends React.Component {

  render() {
    return (
      <img 
        className = 'logo'
        src = {this.props.color === 'blue' ? blueLogo : whiteLogo}
        alt = 'logo fesbal'
      />
    );
  }
};