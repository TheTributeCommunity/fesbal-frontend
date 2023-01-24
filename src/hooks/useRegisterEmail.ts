import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RecipientUserService} from "../services/recipient-user-service";
import usersMock from "../mocks/users.mock";

const useRegisterEmail = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);
    const navigate = useNavigate();

    const onUserEmailChange = (email: string) => {
        setUserEmail(email);
        setHasError(false);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO - Change usersMock by real user and change updateRecipientUser by updateRecipientUserEmail()
        if (validateUserEmail() && usersMock[0].recipientUserId) {
            RecipientUserService.updateRecipientUser(usersMock[0].recipientUserId, userEmail)
                .then(()=> navigate('/register/family-members'))
                .catch(()=> setHasError(true));
        }
    }

    const validateUserEmail = (): boolean => {
        const emailRegex = /\S+@\S+\.\S+/;

        return emailRegex.test(userEmail);
    }

    return {
        userEmail: userEmail,
        hasError,
        onUserEmailChange: onUserEmailChange,
        onSubmit,
        validateUserEmail: validateUserEmail
    }
}

export default useRegisterEmail;
