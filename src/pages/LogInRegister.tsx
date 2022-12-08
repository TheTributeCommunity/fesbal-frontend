import '../assets/css/LogInRegister.css';

//Components imports
import { Logo } from '../components/Logo'; 
import { Button } from '../components/Button';

export const LogInRegister = () => {
  return (
    <div className = "LogInRegister">
      <div className = 'logo-container'>
        <Logo 
          color = 'blue'
        />
      </div>
      <div className = 'button-container'>
        <Button
          color = 'darkBlue'
          text = 'Crear cuenta'
          route = '/RegisterTermsConditions'
        />
        <Button
          color = 'blue'
          text = 'Iniciar sesión'
        />
      </div> 
    </div>
  );
};
