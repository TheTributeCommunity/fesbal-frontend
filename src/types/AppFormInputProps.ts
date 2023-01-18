import React from "react";

export default interface FormInputProps {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    hasError?: boolean;
    error?: string;
    toggleShowPassword?: () => void;
}
