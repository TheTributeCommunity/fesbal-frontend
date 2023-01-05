import React, {FC, useState} from 'react';
import {IdentificationSelectOption, IdentificationSelectProps} from "../../types/IdentificationSelectProps";
import DropDownIcon from "../icons/DropDown";


const IdentificationSelect: FC<IdentificationSelectProps> = ({options, value, onChange}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setIsDropdownOpen(false);
    const handleOptionClick = (option: IdentificationSelectOption) => {
        setSelectedOption(option);
        onChange(option);
        closeDropdown();
    }

    return (
        <div className="relative rounded-md text-blue-light bg-white">
            <div onClick={toggleDropdown}>
                <div className="flex flex-row items-center px-4 py-5">
                    {value
                        ? <span className="text-blue-dark">{value}</span>
                        : <span className="text-blue-light">Tipo</span>}
                    <DropDownIcon/>
                </div>
            </div>
            {isDropdownOpen && (
                <div className="origin-top-left absolute left-0 z-10 mt-1 w-full rounded-md">
                    <ul className="py-1 bg-white rounded-md">
                        {options.map((option) => (
                            <li
                                key={option}
                                className="block px-4 py-2 text-sm leading-5 text-blue-light hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                role="menuitem"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default IdentificationSelect
