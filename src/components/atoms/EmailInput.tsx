import {ChangeEventHandler, FC} from 'react';

interface EmailInputProps {
  onChangeUpdate: ChangeEventHandler<HTMLInputElement>
}

const EmailInput: FC<EmailInputProps> = ({ onChangeUpdate }) => {
  return (
    <div className="email_input">
      <input
        className ="rectangle"
        type="email"
        placeholder="Email"
        onChange={event => {
          onChangeUpdate(event)
        }}
      />
    </div>
  );
};

export default EmailInput;
