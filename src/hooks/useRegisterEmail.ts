import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RecipientUserService} from "../services/recipient-user-service";
import usersMock from "../mocks/users.mock";

const useRegisterEmail = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    const navigate = useNavigate();

    const onUserEmailChange = (email: string) => {
        setUserEmail(email);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO - Change usersMock by local storage user and change updateRecipientUser by updateRecipientUserEmail()
        if (validateUserEmail() && usersMock[0].recipientUserId) {
            RecipientUserService.updateRecipientUser(usersMock[0].recipientUserId, userEmail)
                .then(()=> navigate('/register/family-members'));
        }
    }

    const validateUserEmail = (): boolean => {
        const emailRegex = /\S+@\S+\.\S+/;

        return emailRegex.test(userEmail);
    }

    return {
        userEmail: userEmail,
        onUserEmailChange: onUserEmailChange,
        onSubmit,
        validateUserEmail: validateUserEmail
    }
}

export default useRegisterEmail;
