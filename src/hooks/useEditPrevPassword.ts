import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from 'react-router-dom';
import usersMock from "../mocks/users.mock";

const useEditPrevPassword = () => {
    const [password, setPassword] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();
    const isPasswordValid = (password: string) => {
        return usersMock.find(user => user.password === password);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        return isPasswordValid(password) ? navigate('/profile/edit-new-password') : setHasError(true);
    }

    return {
        onChange,
        hasError,
        onSubmit,
        password,
    }
}
export default useEditPrevPassword;
