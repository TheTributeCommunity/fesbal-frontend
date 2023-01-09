import {validateDNI, validateNIE} from "../helpers";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserIDSelectOption} from "../types/UserIdSelectProps";

const useUserIDForm = () => {
    const [selectedOption, setSelectedOption] = useState<UserIDSelectOption>();
    const [userID, setUserID] = useState<string>('');

    const navigate = useNavigate();
    const validateUserID = (): boolean => {
        return selectedOption === 'DNI' ? validateDNI(userID) : validateNIE(userID);
    }
    const onSelectedOptionChange = (option: UserIDSelectOption) => {
        setSelectedOption(option);
    }
    const onUserIDChange = (id: string) => {
        setUserID(id);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateUserID()) {
            navigate('/profile');
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

export default useUserIDForm;
