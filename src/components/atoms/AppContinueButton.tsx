import "../../styles/AppContinueButton.scss"

import {FC} from 'react';

interface AppContinueButtonProps {
  disabled: boolean
}

const AppContinueButton: FC<AppContinueButtonProps> = ({ disabled }) => {

  function goNext() {
    console.log("Go next not implemented yet!")
  }

  return (
    <button
      className="continue_button button-font"
      disabled={disabled}
      onClick={goNext}
    >
        Continuar
    </button>
  );
};

export default AppContinueButton;
