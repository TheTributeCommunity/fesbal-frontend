import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {validateDNI, validateNIE} from "../helpers";

const useRegisterIDForm = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [userID, setUserID] = useState<string>('');

    const navigate = useNavigate();
    const validateUserID = (): boolean => {
        return selectedOption === 'DNI' ? validateDNI(userID) : validateNIE(userID);
    }
    const onSelectedOptionChange = (option: string) => {
        setSelectedOption(option);
    }
    const onUserIDChange = (id: string) => {
        setUserID(id);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateUserID()) {
            navigate('/register/family-members');
        }
    }

    return {
        selectedOption,
        userID,
        onSelectedOptionChange,
        onUserIDChange,
        onSubmit,
        validateUserID
    }
}

export default useRegisterIDForm;
