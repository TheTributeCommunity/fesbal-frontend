import AppNextButton from '../atom/AppNextButton'
import useEntityLoginPasswordRecovery from '../../hooks/useEntityLoginPasswordRecovery'
import {namespaces} from '../../i18n/i18n.constants'
import {useTranslation} from 'react-i18next'
import AppFormInput from '../atom/AppFormInput'
import { FormEvent } from 'react'

interface EntityLoginPasswordRecoveryFormProps {
    onSubmit: (success: boolean) => void
}

const EntityLoginPasswordRecoveryForm = ({onSubmit: parentOnSubmit}: EntityLoginPasswordRecoveryFormProps) => {
    const {email, onChange, hasError, onSubmit, validateEmail} = useEntityLoginPasswordRecovery()

    const {t: translate} = useTranslation(namespaces.pages.entityLoginPasswordRecovery)
    const buttonDisabled = !validateEmail() || hasError

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        onSubmit(e).then(result => parentOnSubmit(result))
    }

    return (
        <form noValidate onSubmit={handleSubmit} className="mt-8 flex h-full w-full flex-col justify-between gap-12 self-center">
            <div className="flex flex-col">
                <AppFormInput label={translate('email')}
                    name="email" value={email}
                    onChange={onChange}
                    placeholder={translate('email')}
                    hasError={hasError}
                    error={translate('error') as string}
                />
            </div>
            <AppNextButton disabled={buttonDisabled} title={translate('next')}/>
        </form>
    )
}

export default EntityLoginPasswordRecoveryForm
