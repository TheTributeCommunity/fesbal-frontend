import {ChangeEvent, FormEvent, useState} from "react";
import {UserEmail} from "../types/UserLoginProps";
import usersMock from "../mocks/users.mock";

const usePasswordRecovery = <T extends UserEmail>(initialState: T) => {
    const [email, setEmail] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);
    const isFormValid = (email: UserEmail) => {
        return usersMock.some((user) => user.email === email);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(email => e.target.value as T);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!isFormValid(email));
        if (isFormValid(email)) alert("Email enviado");
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email
    }
}

export default usePasswordRecovery;
