import { FormEvent, useState } from 'react'
import { AuthService } from '../services/auth-service'
import { RecipientUserService } from '../services/recipient-user-service'
import { UserGuestService } from '../services/user-guest-service'

const usePhoneForm = (submitButtonId: string) => {
    const [userPhone, setUserPhone] = useState<string>('')

    const onUserPhoneChange = (phone: string) => {
        setUserPhone(phone)
    }

    const onRegisterSubmit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
        e.preventDefault()
        if (validateUserPhone()) {
            UserGuestService.setPhone(AuthService.addPhonePrefix(userPhone))
            return AuthService.signInWithPhoneNumber(submitButtonId, userPhone)
                .then(() => true)
                .catch((e) => {
                    console.log(e)
                    return false
                })
        } else return false
    }

    const onEditSubmit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
        e.preventDefault()
        if (validateUserPhone()) {
            // first update in booster
            return RecipientUserService.update({ phone: AuthService.addPhonePrefix(userPhone) }).then(success => {
                // and after that, firebase
                if (success) return AuthService.updatePhoneNumberSendCode(submitButtonId, userPhone)
                else return false
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
        onRegisterSubmit,
        onEditSubmit
    }
}

export default usePhoneForm
