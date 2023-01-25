import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

const useRegisterPhoneForm = () => {
    const [userPhone, setUserPhone] = useState<string>('');

    const navigate = useNavigate();

    const onUserPhoneChange = (phone: string) => {
        setUserPhone(phone);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateUserPhone()) {
            navigate('/register/family-members');
        }
    }
    const validateUserPhone = (): boolean => {
        const PHONE_REGEX = new RegExp(/^\d{9}(,\d{9})*$/);
        return PHONE_REGEX.test(userPhone);
    }

    return {
        userPhone,
        onUserPhoneChange,
        onSubmit,
        validateUserPhone
    }
}

export default useRegisterPhoneForm;
