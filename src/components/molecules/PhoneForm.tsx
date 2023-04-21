import {useTranslation} from 'react-i18next'
import AppNextButton from '../atom/AppNextButton'
import {namespaces} from '../../i18n/i18n.constants'
import usePhoneForm from '../../hooks/usePhoneForm'
import { ChangeEvent, FormEvent, useState } from 'react'
import AppFormInput from '../atom/AppFormInput'

interface PhoneFormProps {
    onSubmit: (success: boolean) => void
    mode?: string
}

const PhoneForm = ({onSubmit: parentOnSubmit, mode = 'register'}: PhoneFormProps) => {
    const NEXT_BUTTON_ID = 'validate-phone-button-id'
    const { userPhone, onRegisterSubmit, onEditSubmit, validateUserPhone, onUserPhoneChange} = usePhoneForm(NEXT_BUTTON_ID)
    const {t: translate} = useTranslation(namespaces.pages.registerPhone)
    const [hasError, setHasError] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        const submit = mode === 'register' ? onRegisterSubmit : onEditSubmit
        submit(e).then((result) => {
            setHasError(!result)
            parentOnSubmit(result)
        })
    }

    const handleUserPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setHasError(false)
        onUserPhoneChange(e.target.value)
    }

    return (
        <form noValidate onSubmit={handleSubmit} className="mt-2 flex w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-col gap-8">
                <AppFormInput
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

export default PhoneForm
