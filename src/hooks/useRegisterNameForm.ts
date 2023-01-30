import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLettersOnly } from "../helpers/textUtils";
import {AppRoute} from "../enums/app-route";


const useRegisterNameForm = () => {
    const [userName, setUserName] = useState<string>('');
    const [userSurname, setUserSurname] = useState<string>('');
    const MIN_LENGTH = 2

    const navigate = useNavigate();
    const validateNameSurname = (): boolean => {
        const isValidLength = userName.length >= MIN_LENGTH && userSurname.length >= MIN_LENGTH;
        const isValidLetters = isLettersOnly(userName) && isLettersOnly(userSurname);
        return isValidLength && isValidLetters;
    }

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const onSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserSurname(e.target.value);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateNameSurname()) {
            navigate(AppRoute.REGISTER_PHONE);
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

export default useRegisterNameForm;
