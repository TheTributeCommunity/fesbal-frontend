import AppNextButton from '../atom/AppNextButton'
import useLoginForm from '../../hooks/useLoginForm'
import {namespaces} from '../../i18n/i18n.constants'
import {useTranslation} from 'react-i18next'
import AppFormInput from '../atom/AppFormInput'
import { ChangeEvent, FormEvent, useState } from 'react'

interface LoginFormProps {
    onSubmit: (success: boolean) => void;
}

const LoginForm = ({onSubmit: parentOnSubmit}: LoginFormProps) => {
    const NEXT_BUTTON_ID = 'continue-button-id'
    const {userPhone, onUserPhoneChange, validateUserPhone, onSubmit} = useLoginForm(NEXT_BUTTON_ID)
    const {t: translate} = useTranslation(namespaces.pages.loginScreen)
    const [hasError, setHasError] = useState(false)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        onSubmit(e).then((result) => {
            setHasError(!result)
            parentOnSubmit(result)
        })
    }

    const handleUserPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setHasError(false)
        onUserPhoneChange(e.target.value)
    }

    return (
        <form noValidate onSubmit={handleSubmit} className="mt-8 flex w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-col gap-8">
                <AppFormInput
                    label={translate('phone')}
                    name="phone"
                    value={userPhone}
                    onChange={handleUserPhoneChange}
                    placeholder={translate('phone')}
                    hasError={hasError}
                />
            </div>
            <div className="flex flex-col gap-4">
                <AppNextButton disabled={!validateUserPhone()} title={translate('next')} id={NEXT_BUTTON_ID}/>
            </div>
        </form>
    )
}

export default LoginForm
