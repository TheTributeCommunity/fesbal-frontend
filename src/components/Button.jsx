import React from 'react';
import '../assets/css/Button.css';
import { useNavigate } from 'react-router-dom';

export const Button = ({color, text, onClick, route, disable}) => {

  const navigate = useNavigate();

  const manageClick = (event) => {
    if (onClick) onClick(event);
    navigate(route);
  };

  return (
    <button
      className = {`button ${color === 'darkBlue' ? 'dark-blue-button' : 'blue-button'}`}
      onClick = {manageClick}
      disabled = {disable}
    >
      {text}
    </button>
  );
};