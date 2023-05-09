interface ButtonProps {
    title?: string | null
    disabled?: boolean
    bgColor?: string
    onClick?: () => void
    id?: string
    children?: React.ReactNode
}

export default ButtonProps
