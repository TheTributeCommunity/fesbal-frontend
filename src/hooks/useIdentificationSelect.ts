import {useState} from "react";
import {IdentificationSelectOption, IdentificationSelectProps} from "../types/IdentificationSelectProps";

const useIdentificationSelect = ({value, onChange}: IdentificationSelectProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setIsDropdownOpen(false);
    const handleOptionClick = (option: IdentificationSelectOption) => {
        setSelectedOption(option);
        onChange(option);
        closeDropdown();
    }
    return {
        isDropdownOpen,
        selectedOption,
        toggleDropdown,
        handleOptionClick
    }
}

export default useIdentificationSelect;
