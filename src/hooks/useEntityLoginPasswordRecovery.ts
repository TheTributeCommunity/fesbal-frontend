import { ChangeEvent, FormEvent, useState } from 'react'
import { validateEmail } from '../helpers'
import { AuthService } from '../services/auth-service'


const useEntityLoginPasswordRecovery = () => {
    const [email, setEmail] = useState<string>('')
    const [hasError, setHasError] = useState<boolean>(false)

    const isEmailValid = (): boolean => {
        return validateEmail(email)
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setHasError(false)
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
        e.preventDefault()
        try {
            // TODO uncomment this when the correct backend
            // method for updating passwords is implemented
            //await AuthService.sendPasswordRecoveryEmail(email);
            return true
        } catch (error) {
            console.log(error)
            setHasError(true)
            return false
        }
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email,
        validateEmail: isEmailValid
    }
}

export default useEntityLoginPasswordRecovery
