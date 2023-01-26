import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import UserProps from "../types/UserProps";
import {AuthService} from "../services/auth-service";

const useLoginForm = <T extends UserProps>(initialState: T) => {
    const [user, setUser] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AuthService.signIn(user).then(() => navigate('/profile')).catch(() => setHasError(true))
    }

    return {
        onChange,
        user,
        hasError,
        onSubmit,
    }
}

export default useLoginForm;
