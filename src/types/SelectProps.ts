interface SelectProps {
    options: string[];
    value: string;
    onChange: (option: string) => void;
    placeholder?: string;
}

export default SelectProps
