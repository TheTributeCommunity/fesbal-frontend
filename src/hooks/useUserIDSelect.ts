import {FC, useState} from "react";
import UserIDSelectProps, {UserIDSelectOption} from "../types/UserIdSelectProps";

const useIdentificationSelect = ({value, onChange}: UserIDSelectProps) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState<UserIDSelectOption>(value);
    const toggleDropdown = () => setOpenDropdown(!openDropdown);
    const closeDropdown = () => setOpenDropdown(false);
    const onOptionClick = (option: UserIDSelectOption) => {
        setSelectedOption(option);
        onChange(option);
        closeDropdown();
    }

    return {
        openDropdown,
        toggleDropdown,
        selectedOption,
        onOptionClick
    }
}

export default useIdentificationSelect;
