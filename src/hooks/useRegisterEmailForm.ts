import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UsersContext } from '../contexts/usersContext'
import { RecipientUserService } from '../services/recipient-user-service'

const createValidationInput = () => {
    const newValidationInput = document.createElement('input')
    newValidationInput.type = 'email'
    newValidationInput.required = true
    return newValidationInput
}

const useRegisterEmailForm = () => {
    const [userEmail, setUserEmail] = useState<string>('')
    const { firebaseUser } = useContext(UsersContext)
    let validationInput = createValidationInput()

    const simpleEmailValidation = (email: string): boolean => {
        return /\S+@\S+\.\S+/.test(email)
    }

    // email validation based on https://stackoverflow.com/a/13975255
    const validateEmail = (): boolean => {
        if (!userEmail) {
            return false
        }

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
        if (firebaseUser?.uid && validateEmail()) {
            return RecipientUserService.updateEmail(firebaseUser.uid, userEmail)
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
