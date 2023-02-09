import { FormEvent, useState } from "react";
import { AuthService } from "../services/auth-service";

const useLoginValidatePhoneForm = () => {
    const [validationCode, setValidationCode] = useState<string>('');
    const CODE_LENGTH = 6;

    const checkValidationCodeLength = (): boolean => {
        return validationCode.length === CODE_LENGTH;
    }

    const onValidationCodeChange = (code: string) => {
        setValidationCode(code);
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
        e.preventDefault();
        if (checkValidationCodeLength()) {
            return AuthService.confirmPhoneCode(validationCode)
                .then(() => true)
                .catch((e) => {
                    console.log(e)
                    return false;
                })
        } else return false
    }

    return {
        validationCode,
        CODE_LENGTH,
        checkValidationCodeLength,
        onValidationCodeChange,
        onSubmit
    }
}

export default useLoginValidatePhoneForm;
