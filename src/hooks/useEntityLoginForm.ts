import { FormEvent, useState } from 'react'
import { AuthService } from '../services/auth-service'
import { validateEmail } from '../helpers'

const useLoginForm = () => {
    const [user, setUser] = useState({ email: '', password: '' })
    const [hasError, setHasError] = useState(false)

    const onUserChange = (e: FormEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value })
        setHasError(false)
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await AuthService.signIn(user.email, user.password)
            return true
        } catch (error) {
            console.log(error)
            setHasError(true)
            return false
        }
    }

    const validateUser = () => {
        return validateEmail(user.email) && user.password
    }

    return {
        user,
        hasError,
        onUserChange,
        onSubmit,
        validateUser
    }
}

export default useLoginForm
