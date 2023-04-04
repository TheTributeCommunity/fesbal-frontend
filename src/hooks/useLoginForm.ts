import { FormEvent, useState } from 'react'
import { AuthService } from '../services/auth-service'

const useLoginForm = (submitButtonId: string) => {
    const [userPhone, setUserPhone] = useState<string>('')

    const onUserPhoneChange = (phone: string) => {
        setUserPhone(phone)
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
        e.preventDefault()
        if (validateUserPhone()) {
            return AuthService.signInWithPhoneNumber(submitButtonId, userPhone)
                .then(() => true)
                .catch((e) => {
                    console.log(e)
                    return false
                })
        } else return false
    }

    const validateUserPhone = (): boolean => {
        const PHONE_REGEX = new RegExp(/^\d{9}(,\d{9})*$/)
        return PHONE_REGEX.test(userPhone)
    }

    return {
        userPhone,
        onUserPhoneChange,
        validateUserPhone,
        onSubmit,
    }
}

export default useLoginForm
