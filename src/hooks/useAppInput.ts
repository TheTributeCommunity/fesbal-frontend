import {useState} from 'react'

const useAppInput = (initialValue: string) => {
    const [inputValue, setInputValue] = useState(initialValue || '')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const deleteInputValue = () => {
        setInputValue('')
    }

    return { inputValue, deleteInputValue, handleInputChange }
}

export default useAppInput
