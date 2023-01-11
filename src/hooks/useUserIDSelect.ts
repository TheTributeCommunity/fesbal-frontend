import {useState} from "react";
import SelectProps from "../types/SelectProps";

const useUserIDSelect = ({value, onChange}: SelectProps) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(value);
    const toggleDropdown = () => setOpenDropdown(!openDropdown);
    const closeDropdown = () => setOpenDropdown(false);
    const onOptionClick = (option: string) => {
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

export default useUserIDSelect;
