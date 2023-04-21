import React from 'react'
import CrossIcon from '../icons/CloseIcon'
import SearchIcon from '../icons/SearchIcon'

type InputProps = {
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
};

const SearchInput = ({ value, placeholder, onChange, onClear }: InputProps) => {
    return (
        <div className="w-full h-24 bg-white flex place-items-center justify-end  border-solid border-[1px] border-[#DBF4FF] focus-within:border-primary-color">
            <input
                type="text"
                className="w-[80%] h-full bg-transparent font-mega-input text-secondary-color placeholder-primary-color text-center border-none outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <div className="w-[10%] flex flex-col justify-center items-start" onClick={onClear}>
                { value.length ? <CrossIcon color="text-secondary-color" /> : <SearchIcon />}
            </div>
        </div>
    )
}

export default SearchInput
