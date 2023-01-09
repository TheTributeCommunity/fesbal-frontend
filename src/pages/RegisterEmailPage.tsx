import { ChangeEvent } from 'react';

import AppBackButton from '../components/atoms/AppBackButton';
import AppContinueButton from '../components/atoms/AppContinueButton';

const EmailCheck = (event: ChangeEvent<HTMLInputElement> ) => {
  const email = event.target;
  const button = document.getElementById("continue_button");

  if (email.value == "") {
    button.disabled = true
  }
  else {
    button.disabled = !email.validity.valid
  }
}

const RegisterEmailPage = () => {
  return (
    <div className="App">
      <AppBackButton />
      <div>
        <label className="email_title">
          Email
        </label>
        <label className="email_description">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Maecenas lacus purus, hendrerit eu libero sit amet.
        </label>
        <div className="email_input">
          <input
            className ="rectangle"
            type="email"
            placeholder="Email"
            onChange={(event) => EmailCheck(event)}
          />
        </div>
        <AppContinueButton disabled={true} />
      </div>
    </div>
  );
}

export default RegisterEmailPage;
