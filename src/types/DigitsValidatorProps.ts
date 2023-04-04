export default interface DigitsValidatorProps {
    label: string
    digitsCount: number
    value: string
    onChange: (event: string) => void
    hasError?: boolean
    error?: string
}
