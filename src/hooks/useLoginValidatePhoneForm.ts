import { FormEvent, useState } from "react";
import { AuthService } from "../services/auth-service";
import { RecipientUserService } from "../services/recipient-user-service";
import { RecipientUserRole } from "../models/recipient-user";

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
                .then(() => RecipientUserService.getAuth())
                .then((user) => {
                    switch (user.role) {
                        case RecipientUserRole.UserAccepted:
                            break
                        case RecipientUserRole.UserPending:
                            break
                        case RecipientUserRole.UserRegistered:
                            break
                    }
                    return true
                }).catch((e) => {
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
