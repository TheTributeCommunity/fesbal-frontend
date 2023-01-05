import {ChangeEvent, FormEvent, useState} from "react";
import UserLoginProps from "../types/UserLoginProps";
import usersMock from "../mocks/users.mock";

const useLoginForm = <T extends UserLoginProps>(initialState: T) => {
    const [user, setUser] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
        setHasError(false);
    }
    const isFormValid = (user: UserLoginProps): boolean => {
        return usersMock.some((u: UserLoginProps) => u.id === user.id && u.password === user.password);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!isFormValid(user));
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }


    return {
        onChange,
        user,
        hasError,
        onSubmit,
        showPassword,
        toggleShowPassword
    }
}

export default useLoginForm;
