import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthService} from "../services/auth-service";
import {RecipientUserService} from "../services/recipient-user-service";
import usersMock from "../mocks/users.mock";

const useRegisterPhoneForm = (submitButtonId: string) => {
    const [userPhone, setUserPhone] = useState<string>('');

    const navigate = useNavigate();

    const onUserPhoneChange = (phone: string) => {
        setUserPhone(phone);
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateUserPhone()) {
            const user = {...usersMock[0], phone: userPhone};

            AuthService.signInWithPhoneNumber(submitButtonId, userPhone)
                .then(() => RecipientUserService.create(user))
                .then(()=> navigate('register/validate-phone'))
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
