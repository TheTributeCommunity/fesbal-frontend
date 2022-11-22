import React from 'react';
import '../assets/css/Logo.css';
import blueLogo from '../assets/images/blueLogo.png';
import whiteLogo from '../assets/images/whiteLogo.png';

interface Props {
  color: string
};

export const Logo = ({color}: Props) => {
  return (
    <img 
      className = 'logo'
      src = {color === 'blue' ? blueLogo : whiteLogo}
      alt = 'logo fesbal'
    />
  );
};