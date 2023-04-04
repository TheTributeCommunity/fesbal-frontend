import LoginValidatePhoneForm from '../components/molecules/LoginValidatePhoneForm'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../i18n/i18n.constants'
import AppPageHeader from '../components/molecules/AppPageHeader'
import AppWrapper from '../components/molecules/AppWrapper'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import { useNavigate } from 'react-router-dom'
import UnsuccessIcon from '../components/icons/UnsuccessIcon'
import { useState } from 'react'
import { AppRoute } from '../enums/app-route'
import SuccessIcon from '../components/icons/SuccessIcon'

const LoginValidatePhone = () => {
    const { t: translate } = useTranslation(namespaces.pages.loginValidatePhone)
    const [showSuccessDialog, setShowSuccessDialog] = useState(false)
    const [showFailureDialog, setShowFailureDialog] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (success: boolean) => {
        if (success) {
            setShowSuccessDialog(true)
        } else {
            setShowFailureDialog(true)
        }
    }

    return (
        <AppWrapper showBackButton>
            <AppPageHeader
                title={translate('title')}
                description={translate('description') as string}
            />
            <LoginValidatePhoneForm onSubmit={handleSubmit} />
            {showSuccessDialog && (
                <AppMessageDialog
                    icon={<SuccessIcon />}
                    description={translate('successfulValidationMessage')}
                    title={translate('successfulValidationTitle')}
                    buttonText={translate('continue')}
                    buttonOnClick={() => {
                        // TODO login was successful,
                        // but we need to redirect the user to a different screen
                        // depending on its role
                        setShowSuccessDialog(false)
                        navigate(AppRoute.RECIPIENT_HOME)
                    }}
                />
            )}
            {showFailureDialog && (
                <AppMessageDialog
                    icon={<UnsuccessIcon />}
                    description={translate('unsuccessfulValidationMessage')}
                    title={translate('unsuccessfulValidationTitle')}
                    buttonText={translate('tryAgainButton')}
                    buttonBgColor="bg-warning-color"
                    buttonOnClick={() => setShowFailureDialog(false)}
                />
            )}
        </AppWrapper>
    )
}

export default LoginValidatePhone
