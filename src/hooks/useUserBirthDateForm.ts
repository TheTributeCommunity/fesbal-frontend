import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";


const useUserBirthDateForm = () => {
    const [userBirthDate, setUserBirthDate] = useState<string>('');

    const navigate = useNavigate();

    const validateBirthDate = (): boolean => {
        // TODO
        return true;
    }

    const onBirthDateChange = (id: string) => {
        setUserBirthDate(id);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateBirthDate()) {
            navigate('/profile');
        }
    }

    return {
        userBirthDate,
        onBirthDateChange,
        onSubmit,
        validateBirthDate
    }
}

export default useUserBirthDateForm;