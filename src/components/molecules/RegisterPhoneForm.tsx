import {useTranslation} from 'react-i18next'
import AppNextButton from '../atom/AppNextButton'
import {namespaces} from '../../i18n/i18n.constants'
import useRegisterPhoneForm from '../../hooks/useRegisterPhoneForm'
import { ChangeEvent, FormEvent, useState } from 'react'
import AppFormInput from '../atom/AppFormInput'

interface RegisterPhoneFormProps {
    onSubmit: (success: boolean) => void;
}

const RegisterPhoneForm = ({onSubmit: parentOnSubmit}: RegisterPhoneFormProps) => {
    const NEXT_BUTTON_ID = 'validate-phone-button-id'
    const { userPhone, onSubmit, validateUserPhone, onUserPhoneChange} = useRegisterPhoneForm(NEXT_BUTTON_ID)
    const {t: translate} = useTranslation(namespaces.pages.registerPhone)
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

export default RegisterPhoneForm
