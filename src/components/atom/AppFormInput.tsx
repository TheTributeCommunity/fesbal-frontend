import React from "react";
import FormInputProps from "../../types/AppFormInputProps";
import EyeHidePasswordIcon from "../icons/EyeHidePasswordIcon";

export default ({
                    label,
                    type = 'text',
                    name,
                    value,
                    onChange,
                    placeholder,
                    hasError,
                    error,
                    toggleShowPassword
                }: FormInputProps) => {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={name} className={`app-label ${value ? "" : "app-label--hidden"}`}>
                {label}
            </label>
            <div className="relative">
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`app-input ${hasError ? "app-input--error" : ""}`}
                />
                {toggleShowPassword && (
                    <div className="app-eye-password" onClick={toggleShowPassword}>
                        <EyeHidePasswordIcon/>
                    </div>
                )}
            </div>
            {hasError && (
                <p className="text-warning-color font-label">{error}</p>
            )}
        </div>
    );
};
