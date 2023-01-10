import "../../styles/EmailInput.scss"

import {ChangeEventHandler, FC, useState} from 'react';

interface EmailInputProps {
  onChangeUpdate: ChangeEventHandler<HTMLInputElement>
}

const EmailInput: FC<EmailInputProps> = ({ onChangeUpdate }) => {
  const [emptyInput, setEmptiness] = useState(true)

  return (
    <div className="email_input_group">
      {emptyInput ?
        null :
        <label className="email_label label-font cerulean-color">
          Email
        </label>
      }
      <input
        className ="email_input input-font midnight-blue-color"
        type="email"
        placeholder="Email"
        onChange={event => {
          setEmptiness(event.target.value == "")
          onChangeUpdate(event)
        }}
      />
    </div>
  );
};

export default EmailInput;
