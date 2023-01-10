import {ChangeEventHandler, FC, useState} from 'react';

interface EmailInputProps {
  onChangeUpdate: ChangeEventHandler<HTMLInputElement>
}

const EmailInput: FC<EmailInputProps> = ({ onChangeUpdate }) => {
  const [emptyInput, setEmptiness] = useState(true)

  return (
    <div className="email_input">
      {emptyInput ?
        null :
        <label className="small_email">
          Email
        </label>
      }
      <input
        className ="rectangle"
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
