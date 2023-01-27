import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import UserProps from "../types/UserProps";
import {AuthService} from "../services/auth-service";

const useLoginForm = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();
    const onChangeUserEmail = (email: string) => {
        setUserEmail(email);
        setHasError(false);
    }
    const onChangeUserPassword = (password: string) => {
        setUserPassword(password);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AuthService.signIn(userEmail, userPassword)
            .then(() => navigate('/profile'))
            .catch(() => setHasError(true))
    }

    return {
        userEmail,
        userPassword,
        onChangeUserEmail,
        onChangeUserPassword,
        hasError,
        onSubmit,
    }
}

export default useLoginForm;
