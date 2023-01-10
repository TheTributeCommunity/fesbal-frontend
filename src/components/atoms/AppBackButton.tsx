import "../../styles/AppBackButton.scss"

import RightArrowIcon from '../icons/RightArrowIcon';

const AppBackButton = () => {

  function goBack() {
    console.log("Go back not implemented yet!")
  }

  return (
    <button className="back_button" onClick={goBack}>
      <RightArrowIcon />
    </button>
  );
};

export default AppBackButton;
