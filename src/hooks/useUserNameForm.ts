import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {isLettersOnly} from "../helpers/textUtils";


const useUserNameForm = () => {
    const [userName, setUserName] = useState<string>('');
    const [userSurname, setUserSurname] = useState<string>('');
    const MIN_LENGTH = 2

    const navigate = useNavigate();
    const validateNameSurname = (): boolean => {
        const isValidLength = userName.length >= MIN_LENGTH && userSurname.length >= MIN_LENGTH; 
        const isValidLetters = isLettersOnly(userName) && isLettersOnly(userSurname);
        return isValidLength && isValidLetters;
    }

    const onNameChange = (name: string) => {
        setUserName(name);
    }

    const onSurnameChange = (surname: string) => {
        setUserSurname(surname);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateNameSurname()) {
            navigate('/profile');
        }
    }

    return {
        userName,
        userSurname,
        onNameChange,
        onSurnameChange,
        onSubmit,
        validateNameSurname
    }
}

export default useUserNameForm;
