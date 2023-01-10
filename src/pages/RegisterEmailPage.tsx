import {ChangeEvent, useState} from 'react';

import AppBackButton from '../components/atoms/AppBackButton';
import AppContinueButton from '../components/atoms/AppContinueButton';
import EmailInput from "../components/atoms/EmailInput";

const RegisterEmailPage = () => {
  const [emailValidity, setValidity] = useState(false)

  const validEmail = (event: ChangeEvent<HTMLInputElement> ) => {
    const email = event.target;

    if (email.value == "") {
      return false
    }
    else {
      return email.validity.valid
    }
  }

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
        <EmailInput onChangeUpdate={event => setValidity(validEmail(event))} />
        <AppContinueButton disabled={!emailValidity} />
      </div>
    </div>
  );
}

export default RegisterEmailPage;
