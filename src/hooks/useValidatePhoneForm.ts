import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthService} from "../services/auth-service";
import {RecipientUserService} from "../services/recipient-user-service";
import {UserGuestService} from "../services/user-guest-service";
import {AppRoute} from "../enums/app-route";

const useValidatePhoneForm = () => {
    const [validationCode, setValidationCode] = useState<string>('');
    const CODE_LENGTH = 6;

    const navigate = useNavigate();
    const checkValidationCodeLength = (): boolean => {
        return validationCode.length === CODE_LENGTH;
    }

    const onValidationCodeChange = (code: string) => {
        setValidationCode(code);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkValidationCodeLength()) {
            AuthService.confirmPhoneCode(validationCode)
                .then(() => RecipientUserService.create(UserGuestService.get()))
                .then(() => navigate(AppRoute.REGISTER_FAMILY_MEMBERS))
        }
    }

    return {
        validationCode,
        CODE_LENGTH,
        checkValidationCodeLength,
        onValidationCodeChange,
        onSubmit
    }
}

export default useValidatePhoneForm;
