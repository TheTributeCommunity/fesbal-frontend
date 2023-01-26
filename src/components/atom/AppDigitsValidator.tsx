import React, { useRef } from "react";
import DigitsValidatorProps from "../../types/DigitsValidatorProps";
export const AppDigitsValidator = ({
                    label,
                    digitsCount,
                    value,
                    onChange,
                    hasError,
                    error,
                    resendCodeText,
                }: DigitsValidatorProps) => {
    
    const digitsRef = useRef<HTMLInputElement[]>([]);


    const onDigitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value: fieldValue} = e.target;
        const isOnlyNumbers = /^\d+$/.test(fieldValue);   

        let insertedValue = (e.nativeEvent as InputEvent).data || '';


        if(!isOnlyNumbers) {
            e.target.value = fieldValue.replace(/[^0-9]/g, '');

            if(fieldValue === "") { // user pressed backspace
                const previousInput = e.target.previousElementSibling as HTMLInputElement;
                if (previousInput) {
                    previousInput.focus();
                }
            }
        } else {
            if(fieldValue.length > 1) {
                e.target.value = insertedValue; // to replace the old value with the new one
            }

            const nextInput = e.target.nextElementSibling as HTMLInputElement;
            if (nextInput) {
                nextInput.focus();
            }
        }


        let finalValue = '';

        for(let i = 0; i < digitsRef.current.length; i++) {
            finalValue += digitsRef.current[i].value;
        }


        value = finalValue;
        onChange(finalValue);
    };
    
    const generateDigitsInputs = () => {
        const digits = [];
        for (let i = 0; i < digitsCount; i++) {
            digits.push(
                (<input
                    key={i}
                    type="number"
                    name={`digit-${i}`}
                    ref={(el) => (el && !digitsRef.current.includes(el) && digitsRef.current.push(el))}
                    onChange={onDigitsChange}
                    className={`app-input app-input--digits ${hasError ? "app-input--error" : ""}`}
                />)
            );
        }
        return digits;
    };

    return (
        <div className="flex flex-col gap-1.5 mb-2 mt-4">
            <label className={`app-label`}>
                {label}
            </label>
            <div className="relative flex gap-x-3">
                {generateDigitsInputs()}
            </div>
            {hasError && (
                <p className="text-warning-color font-label">{error}</p>
            )}
            {resendCodeText && (
                <p className="mt-4 text-right text-secondary-color text-sm underline cursor-pointer font-semibold">{resendCodeText}</p>
            )}
        </div>
    );
};
