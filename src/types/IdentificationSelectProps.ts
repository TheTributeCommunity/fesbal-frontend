export interface IdentificationSelectProps {
    options?: IdentificationSelectOption[];
    value: IdentificationSelectOption
    onChange: (value: IdentificationSelectOption) => void;
}

export type IdentificationSelectOption = "DNI" | "NIE" | undefined;


