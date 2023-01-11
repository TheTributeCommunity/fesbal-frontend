import React, {FC} from 'react';
import useUserIDSelect from "../../hooks/useUserIDSelect";
import SelectProps from "../../types/SelectProps";
import DropDownIcon from "../icons/DropDownIcon";


const IdentificationSelect: FC<SelectProps> = ({options, value, onChange}) => {
    const {onOptionClick, openDropdown, toggleDropdown, selectedOption} = useUserIDSelect({value, onChange});
    return (
        <div className="relative rounded-md text-primary-color bg-white">
            <div onClick={toggleDropdown} className="cursor-pointer">
                <div className="flex flex-row items-center justify-between px-4 py-5 gap-2">
                    {selectedOption
                        ? <span className="text-secondary-color">{selectedOption}</span>
                        : <span className="text-primary-color">Tipo</span>}
                    <DropDownIcon/>
                </div>
            </div>
            {openDropdown && (
                <div className="origin-top-left absolute left-0 z-10 mt-1 w-full rounded-md">
                    <ul className="py-1 bg-white rounded-md cursor-pointer">
                        {options!.map((option) => (
                            <li
                                key={option}
                                className="block px-4 py-2 text-sm leading-5 text-primary-color hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                role="menuitem"
                                onClick={() => onOptionClick(option)}
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
