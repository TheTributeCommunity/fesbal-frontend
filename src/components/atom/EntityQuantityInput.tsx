import CrossIcon from '../icons/CloseIcon'
import React from 'react'

interface EntityQuantityInputProps {
    quantity: number;
    measurementUnit: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
}
const EntityQuantityInput = ({quantity, measurementUnit, onChange, onClear}: EntityQuantityInputProps) => {
    return (
        <div className="w-full h-24 px-8 bg-white border flex items-center gap-2 justify-between">
            <div className="flex items-center w-full justify-center">
                <input
                    type="number"
                    className="font-roboto-flex text-mega-input text-secondary-color w-28 text-right px-2"
                    value={quantity}
                    onFocus={(event) => event.target.select()}
                    onChange={onChange}
                />
                <span className="font-roboto-flex text-big-input text-primary-color">
                    {measurementUnit}
                </span>
            </div>
            <div onClick={onClear} className="justify-self-end">
                <CrossIcon color="text-secondary-color"/>
            </div>
        </div>
    )
}

export default EntityQuantityInput
