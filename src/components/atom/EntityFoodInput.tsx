import React from 'react';
import CrossIcon from '../icons/CrossIcon';

type InputProps = {
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
};

const EntityFoodInput = ({ value, placeholder, onChange, onClear }: InputProps) => {
    return (
        <div className="w-full h-24 px-8 bg-white border flex place-items-center">
            <input
                type="text"
                className="w-full h-full bg-transparent border-none outline-none font-mega-input text-secondary-color placeholder-primary-color text-center"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {value.length > 0 && (
                <div onClick={onClear}>
                    <CrossIcon color="text-secondary-color" />
                </div>
            )}
        </div>
    );
};

export default EntityFoodInput;
