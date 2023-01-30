import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthService} from "../services/auth-service";
import {UserGuestService} from "../services/user-guest-service";
import {AppRoute} from "../enums/app-route";

const useRegisterPhoneForm = (submitButtonId: string) => {
    const [userPhone, setUserPhone] = useState<string>('');

    const navigate = useNavigate();

    const onUserPhoneChange = (phone: string) => {
        setUserPhone(phone);
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateUserPhone()) {
            UserGuestService.setPhone(userPhone)

            AuthService.signInWithPhoneNumber(submitButtonId, userPhone)
                .then(() => navigate(AppRoute.REGISTER_VALIDATE_PHONE))
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
