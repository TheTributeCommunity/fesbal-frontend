import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

const useUserNameForm = () => {
    const [userName, setUserName] = useState<string>('');
    const [userSurname, setUserSurname] = useState<string>('');
    const MIN_LENGTH = 2

    const navigate = useNavigate();
    const validateNameSurname = (): boolean => {
        return userName.length >= MIN_LENGTH && userSurname.length >= MIN_LENGTH; 
    }

    const onNameChange = (id: string) => {
        setUserName(id);
    }

    const onSurnameChange = (id: string) => {
        setUserSurname(id);
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
