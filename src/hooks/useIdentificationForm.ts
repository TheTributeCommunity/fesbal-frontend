import {FormEvent, useState} from 'react';
import {IdentificationSelectOption} from "../types/IdentificationSelectProps";
import {validateDNI, validateNIE} from "../helpers";

const useIdentificationForm = () => {
    const [selectedOption, setSelectedOption] = useState<IdentificationSelectOption>(undefined);
    const [inputValue, setInputValue] = useState<string>('');
    const validateInput = (): boolean => {
        return selectedOption === 'DNI' ? validateDNI(inputValue) : validateNIE(inputValue);
    }
    const handleSelectChange = (value: IdentificationSelectOption) => setSelectedOption(value);
    const handleInputChange = (value: string) => setInputValue(value);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateInput()) {
            console.log('Valid input');
        }
    }
    return {
        selectedOption,
        inputValue,
        validateInput,
        handleSelectChange,
        handleInputChange,
        handleSubmit
    }
}

export default useIdentificationForm
