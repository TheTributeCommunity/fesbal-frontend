import '../assets/css/Button.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  color: string
  text: string
  onClick?: Function
  route?: string
  disable?: boolean
};

export const Button = ({color, text, onClick, route, disable}: Props) => {

  const navigate = useNavigate();

  const manageClick = () => {
    onClick?.bind(this);
    if (route) navigate(route);
  };

  return (
    <button
      className = {`button ${color === 'darkBlue' ? 'dark-blue-button' : 'blue-button'}`}
      onClick = {manageClick.bind(this)}
      disabled = {disable}
    >
    {text}
    </button>
  );
};