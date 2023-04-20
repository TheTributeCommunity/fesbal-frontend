import React, {FC, useState} from 'react'
import DropDownIcon from '../icons/DropDownIcon'
import SelectProps from '../../types/SelectProps'


const RegisterIDSelect: FC<SelectProps> = ({options, value, onChange, placeholder}) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const toggleDropdown = () => setOpenDropdown(!openDropdown)
    const closeDropdown = () => setOpenDropdown(false)
    const onOptionClick = (option: string) => {
        onChange(option)
        closeDropdown()
    }

    return (
        <div className="relative rounded-md bg-white text-primary-color">
            <div onClick={toggleDropdown} className="cursor-pointer">
                <div className="flex flex-row items-center justify-between gap-2 px-4 py-5">
                    {value
                        ? <span className="text-secondary-color font-input">{value}</span>
                        : <span className="text-primary-color font-input">{placeholder ?? ''}</span>}
                    <DropDownIcon/>
                </div>
            </div>
            {openDropdown && (
                <div className="absolute left-0 z-10 mt-1 w-full origin-top-left rounded-md">
                    <ul className="cursor-pointer rounded-md bg-white py-1">
                        {options.map((option) => (
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
    )
}

export default RegisterIDSelect