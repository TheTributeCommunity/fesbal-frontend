import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipientUserService } from "../services/recipient-user-service";

const createValidationInput = () => {
    let newValidationInput = document.createElement('input');
    newValidationInput.type = 'email';
    newValidationInput.required = true;
    return newValidationInput;
}

const useRegisterEmailForm = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    let validationInput = createValidationInput();

    const simpleEmailValidation = (email: string): boolean => {
        return /\S+@\S+\.\S+/.test(email);
    }

    // email validation based on https://stackoverflow.com/a/13975255
    const validateEmail = (): boolean => {
        if (!userEmail) {
            return false;
        }

        if (validationInput === null) {
            validationInput = createValidationInput();
        }

        validationInput.value = userEmail;

        let isValidEmail;


        const browserSupportsCheckValidity = typeof validationInput.checkValidity === 'function';
        isValidEmail = browserSupportsCheckValidity ? validationInput.checkValidity() : simpleEmailValidation(userEmail);

        validationInput.remove();
        return validationInput.checkValidity();

    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
        e.preventDefault();
        if (validateEmail()) {
            return RecipientUserService.getAuth()
                .then((recipientUser) => RecipientUserService.updateEmail(recipientUser.id, userEmail))
                .catch((e) => {
                    console.log(e)
                    return false
                })
        } else return false
    }

    return {
        userEmail,
        validateEmail,
        onEmailChange,
        onSubmit
    }
}

export default useRegisterEmailForm;
