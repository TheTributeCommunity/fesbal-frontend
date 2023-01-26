export default interface DigitsValidatorProps {
    label: string;
    digitsCount: number;
    value: string;
    onChange: (event: string) => void;
    resendCodeText?: string | null;
    hasError?: boolean;
    error?: string;
}
