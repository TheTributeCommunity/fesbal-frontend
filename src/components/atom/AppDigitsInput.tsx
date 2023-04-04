import React from 'react'
import useAppDigitsInput from '../../hooks/useAppDigitsInput'
import DigitsValidatorProps from '../../types/DigitsValidatorProps'
export const AppDigitsInput = ({
    label,
    digitsCount,
    value,
    onChange,
    hasError,
    error,
}: DigitsValidatorProps) => {
                        
    const { digitsRef, onDigitsChange } = useAppDigitsInput(onChange)


    const generateDigitsInputs = () => {
        const digits = []
        for (let i = 0; i < digitsCount; i++) {
            digits.push(
                (<input
                    key={i}
                    type="number"
                    ref={(el) => (el && !digitsRef.current.includes(el) && digitsRef.current.push(el))}
                    onChange={onDigitsChange}
                    className={`app-input app-input--digits ${hasError ? 'app-input--error' : ''}`}
                />)
            )
        }
        return digits
    }


    return (
        <div className="flex flex-col gap-1.5 mt-4">
            <label className={'app-label'}>
                {label}
            </label>
            <div className="relative flex gap-x-3">
                {generateDigitsInputs()}
            </div>
            {hasError && (
                <p className="text-warning-color font-label">{error}</p>
            )}
        </div>
    )
}
