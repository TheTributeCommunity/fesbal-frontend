import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { UsersContext } from '../contexts/usersContext'
import { RecipientUserService } from '../services/recipient-user-service'
import { useUserStore } from '../store/logged-user'

const createValidationInput = () => {
    const newValidationInput = document.createElement('input')
    newValidationInput.type = 'email'
    newValidationInput.required = true
    return newValidationInput
}

const useRegisterEmailForm = (allowEmptyEmail = true) => {
    const [userEmail, setUserEmail] = useState<string>('')
    const userId = useUserStore(state => state.userId)
    let validationInput = createValidationInput()

    const simpleEmailValidation = (email: string): boolean => {
        return /\S+@\S+\.\S+/.test(email)
    }

    // email validation based on https://stackoverflow.com/a/13975255
    const validateEmail = (): boolean => {
        if (!userEmail && allowEmptyEmail) return true // empty email is valid during registration

        if (validationInput === null) {
            validationInput = createValidationInput()
        }

        validationInput.value = userEmail
        const browserSupportsCheckValidity = typeof validationInput.checkValidity === 'function'
        const isValidEmail = browserSupportsCheckValidity ? validationInput.checkValidity() : simpleEmailValidation(userEmail)
        validationInput.remove()
        return isValidEmail
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
        e.preventDefault()
        if (userId && validateEmail()) {
            return RecipientUserService.updateEmail(userId, userEmail)
                .catch((e) => {
                    console.log(e)
                    return false
                })
        } else return false
    }

    return {
        userEmail,
        validateEmail,
        onEmailChange,
        onSubmit
    }
}

export default useRegisterEmailForm
