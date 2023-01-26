import { FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthService} from "../services/auth-service";

const useLoginForm = (submitButtonId: string) => {
    const [userPhone, setUserPhone] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();

    const onUserPhoneChange = (phone: string) => {
        setUserPhone(phone);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateUserPhone()) {
            AuthService.signInWithPhoneNumber(submitButtonId, userPhone)
                .then(() => navigate('/profile'))
                .catch(() => setHasError(true))
        }
    }
    const validateUserPhone = (): boolean => {
        const PHONE_REGEX = new RegExp(/^\d{9}(,\d{9})*$/);
        return PHONE_REGEX.test(userPhone);
    }

    return {
        userPhone,
        onUserPhoneChange,
        validateUserPhone,
        hasError,
        onSubmit,
    }
}

export default useLoginForm;
