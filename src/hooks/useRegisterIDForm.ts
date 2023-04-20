import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateDNI, validateNIE } from '../helpers'
import { AppRoute } from '../enums/app-route'
import { getDiffInYears } from '../helpers/dateHelper'

const useRegisterIDForm = () => {
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [userID, setUserID] = useState<string>('')

    const navigate = useNavigate()
    const validateUserID = (birthDate?: Date): boolean => {
        if (birthDate && getDiffInYears(birthDate, new Date()) < 18) return true
        else return selectedOption === 'DNI' ? validateDNI(userID) : validateNIE(userID)
    }
    const onSelectedOptionChange = (option: string) => {
        setSelectedOption(option)
    }
    const onUserIDChange = (id: string) => {
        // filter everything except letters and numbers
        setUserID(id.replace(/[^a-zA-Z0-9]/g, ''))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateUserID()) {
            navigate(AppRoute.REGISTER_PHONE)
        }
    }

    return {
        selectedOption,
        userID,
        onSelectedOptionChange,
        onUserIDChange,
        onSubmit,
        validateUserID,
        setSelectedOption,
        setUserID
    }
}

export default useRegisterIDForm
