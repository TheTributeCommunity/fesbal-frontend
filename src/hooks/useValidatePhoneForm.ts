import { FormEvent, useState } from 'react'
import { AuthService } from '../services/auth-service'
import { RecipientUserService } from '../services/recipient-user-service'
import { UserGuestService } from '../services/user-guest-service'

const useValidatePhoneForm = () => {
    const [validationCode, setValidationCode] = useState<string>('')
    const CODE_LENGTH = 6

    const checkValidationCodeLength = (): boolean => {
        return validationCode.length === CODE_LENGTH
    }

    const onValidationCodeChange = (code: string) => {
        setValidationCode(code)
    }

    const onRegisterSubmit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
        e.preventDefault()
        if (checkValidationCodeLength()) {
            return AuthService.confirmPhoneCode(validationCode)
                .then(() => RecipientUserService.create(UserGuestService.get()))
                .then((result) => {
                    return result
                })
                .catch((e) => {
                    console.log(e)
                    return false
                })
        } else return false
    }

    const onEditSubmit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
        e.preventDefault()
        if (checkValidationCodeLength()) {
            return AuthService.updatePhoneNumberWithCode(validationCode)
                .then(success => success)
                .catch((e) => {
                    console.log(e)
                    return false
                })
        } else return false
    }

    return {
        validationCode,
        CODE_LENGTH,
        checkValidationCodeLength,
        onValidationCodeChange,
        onRegisterSubmit,
        onEditSubmit,
    }
}

export default useValidatePhoneForm
