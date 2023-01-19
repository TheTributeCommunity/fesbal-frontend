import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import DropDownIcon from "../icons/DropDownIcon";
import SelectProps from "../../types/SelectProps";
import useRegisterIDSelect from "../../hooks/useRegisterIDSelect";
import {namespaces} from "../../i18n/i18n.constants";


const IdentificationSelect: FC<SelectProps> = ({options, value, onChange}) => {
    const {onOptionClick, openDropdown, toggleDropdown, selectedOption} = useRegisterIDSelect({value, onChange});
    const {t} = useTranslation(namespaces.pages.registerID);

    return (
        <div className="relative rounded-md bg-white text-primary-color">
            <div onClick={toggleDropdown} className="cursor-pointer">
                <div className="flex flex-row items-center justify-between gap-2 px-4 py-5">
                    {selectedOption
                        ? <span className="text-secondary-color font-input">{selectedOption}</span>
                        : <span className="text-primary-color font-input">{t('type')}</span>}
                    <DropDownIcon/>
                </div>
            </div>
            {openDropdown && (
                <div className="absolute left-0 z-10 mt-1 w-full origin-top-left rounded-md">
                    <ul className="cursor-pointer rounded-md bg-white py-1">
                        {options!.map((option) => (
                            <li
                                key={option}
                                className="block px-4 py-2 leading-5 font-input text-primary-color hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
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
