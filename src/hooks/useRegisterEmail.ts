import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

const useRegisterEmail = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    const navigate = useNavigate();

    const onUserEmailChange = (email: string) => {
        setUserEmail(email);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateUserEmail()) {
            navigate('/register/family-members');
        }
    }

    const validateUserEmail = (): boolean => {
        return true;
    }

    return {
        userEmail: userEmail,
        onUserEmailChange: onUserEmailChange,
        onSubmit,
        validateUserEmail: validateUserEmail
    }
}

export default useRegisterEmail;
