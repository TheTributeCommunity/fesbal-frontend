import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

const useAppDigitsInput = (onChange: (value: string) => void) => {
    const digitsRef = useRef<HTMLInputElement[]>([]);
    const [value, setValue] = useState<string>("");

    const moveToNextInput = (input: HTMLInputElement) => {
        const nextInput = input.nextElementSibling as HTMLInputElement;
        if (nextInput) {
            nextInput.focus();
        }
    };

    const moveToPreviousInput = (input: HTMLInputElement) => {
        const previousInput = input.previousElementSibling as HTMLInputElement;
        if (previousInput) {
            previousInput.focus();
        }
    };

    const joinInputsValues = () => {
        let finalValue = "";
        for (let i = 0; i < digitsRef.current.length; i++) {
            finalValue += digitsRef.current[i].value;
        }
        return finalValue;
    };

    const onDigitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: currentValue } = e.target;
        const isOnlyNumbers = /^\d+$/.test(currentValue);
        let insertedValue = (e.nativeEvent as InputEvent).data || "";

        if (!isOnlyNumbers) {
            e.target.value = currentValue.replace(/[^0-9]/g, "");

            if (currentValue === "") {
                // user pressed backspace
                moveToPreviousInput(e.target);
            }
        } else {
            if (currentValue.length > 1) {
                e.target.value = insertedValue; // to replace the old value with the new one
            }

            moveToNextInput(e.target);
        }

        const finalValue = joinInputsValues();
        setValue(finalValue);
        onChange(finalValue);
    };

    return {
        digitsRef,
        value,
        onDigitsChange,
    };
};

export default useAppDigitsInput;
