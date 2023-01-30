import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

const useValidatePhoneForm = () => {
    const [validationCode, setValidationCode] = useState<string>('');
    const CODE_LENGTH = 6;

    const navigate = useNavigate();
    const checkValidationCodeLength = (): boolean => {
        return validationCode.length === CODE_LENGTH;
        // TODO send to the backend to check validity
    }

    const onValidationCodeChange = (code: string) => {
        setValidationCode(code);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkValidationCodeLength()) {
            //  TODO send to the backend to check validity
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
