import {ChangeEvent, FormEvent, useState} from "react";
import UserProps from "../types/UserProps";
import usersMock from "../mocks/users.mock";

const useLoginForm = <T extends UserProps>(initialState: T) => {
    const [user, setUser] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
        setHasError(false);
    }
    const isFormValid = (user: UserProps): boolean => {
        return usersMock.some((u: UserProps) => u.id === user.id && u.password === user.password);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!isFormValid(user));
    }

    return {
        onChange,
        user,
        hasError,
        onSubmit,
    }
}

export default useLoginForm;
